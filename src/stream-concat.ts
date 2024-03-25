import { Transform, type Stream, type TransformCallback } from 'node:stream';

export type NextStreamCallback = () => Stream | Promise<Stream> | null | undefined;

export class StreamConcat extends Transform {
  declare streams: Stream[] | NextStreamCallback;
  declare options: any;
  declare canAddStream: boolean;
  declare currentStream: any;
  declare streamIndex: number;

  constructor(streams: Stream[] | NextStreamCallback = [], options = {}) {
    super(options);
    this.streams = streams;
    this.options = options;
    this.canAddStream = Array.isArray(streams);
    this.currentStream = null;
    this.streamIndex = 0;

    this.nextStream();
  }

  addStream(newStream: Stream) {
    if (!this.canAddStream) {
      return this.emit('error', new Error('Can\'t add stream.'));
    }
    (this.streams as any).push(newStream);
  }

  async nextStream() {
    this.currentStream = null;
    if (this.streams.constructor === Array && this.streamIndex < this.streams.length) {
      this.currentStream = this.streams[this.streamIndex++];
    } else if (typeof this.streams === 'function') {
      this.canAddStream = false;
      this.currentStream = this.streams();
    }

    const pipeStream = async () => {
      if (this.currentStream === null) {
        this.canAddStream = false;
        this.end();
      } else if (typeof this.currentStream.then === 'function') {
        this.currentStream = await this.currentStream;
        await pipeStream();
      } else {
        this.currentStream.pipe(this, { end: false });
        let streamClosed = false;
        const goNext = async () => {
          if (streamClosed) {
            return;
          }
          streamClosed = true;
          await this.nextStream();
        };

        this.currentStream.on('end', goNext);
        if (this.options.advanceOnClose) {
          this.currentStream.on('close', goNext);
        }
      }
    };
    await pipeStream();
  }
  _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
    callback(null, chunk);
  }
}
