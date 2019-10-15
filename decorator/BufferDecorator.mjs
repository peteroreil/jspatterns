export default class BufferReader {
    constructor(reader, encoding = 'utf8') {
        this.encoding = encoding;
        this.reader = reader;
    }

    read() {
        return Buffer.from(this.reader.read(), this.encoding);
    }
}
