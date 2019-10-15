import Vehicle from './Vehicle.mjs';

export default class Car extends Vehicle {
    constructor(n, numWheels, engineType) {
        super(numWheels, engineType, 'car');
        this.Name = n;
        this.wheels = numWheels;
        this.engineType = engineType;
    }

    set Name(name) {
        this.name = name;
    }

    get Name() {
        return `Car name: ${this.name}`;
    }
}
