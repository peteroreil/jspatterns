export default class ReverseReader {
    constructor(reader) {
        this.reader = reader;
    }

    read() {
        return this.reader.read()
            .split('')
            .reverse()
            .join('');
    }
}
