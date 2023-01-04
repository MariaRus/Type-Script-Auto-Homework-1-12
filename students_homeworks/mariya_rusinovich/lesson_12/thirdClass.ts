import {Car} from "./mainClass";

export class BMW extends Car {
    constructor(public wheels: number, public side: string, public maxSpeed: number, public model: string) {
        super(wheels, side);
    }

    getWheelsInformation() {
        return `${this.model} has ${this.wheels} wheels`;
    }

    getSideInformation () {
        return `${this.model} is ${this.side} car`;
    }

    getMaxSpeedInformation () {
        return `${this.model} has max speed ${250} kilometers per hour`;
    }
}