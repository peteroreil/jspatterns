import VehicleFactory from './VehicleFactory.mjs';

const car = VehicleFactory.create('car');
const truck = VehicleFactory.create('truck');

car.revEngine();
// => This car's diesel engine roaring... Vrrrroooom!
truck.revEngine();
// => This truck's diesel engine roaring... Vrrrroooom!
car.drive();
// => This 4 wheels rolling down the road... Vrrrroooom!
truck.drive();
// => This 12 wheels rolling down the road... Vrrrroooom!

console.log(car.Name);
// => Car name: Ford
console.log(truck.Name);
// => Truck name: BMC
