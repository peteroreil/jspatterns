import Target from './Target.mjs';

export default class Proxy {
    constructor() {
        this.target = null;
    }

    getResource(name) {
        if (this.target === null) {
            this.target = new Target();
        }
        // proxy request to target
        // do some validation
        if (name) {
            return this.target.getResource(name);
        }
        throw new Error('Whoops, no name');
    }
}
