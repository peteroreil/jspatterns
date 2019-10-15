export default class Vehicle {
    constructor(numWheels, engineType, type) {
        this.type = type;
        this.numWheels = numWheels;
        this.engineType = engineType;
    }

    revEngine() {
        console.log(`This ${this.type}'s ${this.engineType} engine roaring... Vrrrroooom!`);
    }

    drive() {
        console.log(`This ${this.numWheels} wheels rolling down the road... Vrrrroooom!`);
    }
}
