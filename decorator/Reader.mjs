export default class Reader {
    constructor(readTarget) {
        // a simple string
        this.readTarget = readTarget;
    }

    read() {
        return this.readTarget;
    }
}
