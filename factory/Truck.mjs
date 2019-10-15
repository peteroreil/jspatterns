import Vehicle from './Vehicle.mjs';

export default class Truck extends Vehicle {
    constructor(name, numWheels, engineType) {
        super(numWheels, engineType, 'truck');
        this.Name = name;
        this.wheels = numWheels;
        this.engineType = engineType;
    }

    get Name() {
        return `Truck name: ${this.name}`;
    }

    set Name(name) {
        this.name = name;
    }
}
