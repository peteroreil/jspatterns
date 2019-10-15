export default class Target {
    constructor() {
        this.resources = {
            one: 'super expensive resource'
        };
    }

    getResource(name) {
        return this.resources[name];
    }
}
