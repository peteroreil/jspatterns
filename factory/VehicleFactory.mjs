import Car from './Car.mjs';
import Truck from './Truck.mjs';

export default class VehicleFactory {
    static create(type) {
        if (type === 'car') return new Car('Ford', 4, 'diesel');
        if (type === 'truck') return new Truck('BMC', 12, 'diesel');
        return {};
    }
}
