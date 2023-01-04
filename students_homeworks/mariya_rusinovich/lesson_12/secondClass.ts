import {Car} from "./mainClass";

export class Toyota extends Car{
constructor(public wheels: number, public side: string, public maxSpeed: number, public model: string) {
    super(wheels, side);
}

sayCongrats (price: number) {
    if (price <= 0) {
        throw new Error(`Car price cannot be 0 or less then 0`);
    }
    else {
        return (`Congratulations with new car - ${this.model}! It has ${this.wheels} wheels, it's max speed is ${this.maxSpeed} and it is ${this.side} car`);
    }
}
}