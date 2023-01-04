/*Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.
Конструкт родительского класса принимает переменные марку авто и тип двигателя.
Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>.
Approximately cost of the car is <carCost>`.
(В задании используйте не только public модификатор, где это возможно)*/

class Car {
    constructor (protected brand: any, public engine: any){}
}
class sportCar extends Car {
    protected brand: any;
    public engine: any;
    public maxSpeed: any;
    public cost: any;
    constructor(brand: any, engine: any, maxSpeed: any, cost: any) {
        super(brand, engine)
        this.maxSpeed = maxSpeed;
        this.cost = cost;
    }
    showCar1() {
        return `This is ${this.brand}. It has ${this.engine} engine and max speed equal to ${this.maxSpeed}. Approximately cost of the car is ${this.cost}.`
    }
}
class luxuryCar extends Car {
    protected brand: any;
    public engine: any;
    public maxSpeed: any;
    public cost: any;
    constructor(brand: any, engine: any, maxSpeed: any, cost: any) {
        super(brand, engine)
        this.maxSpeed = maxSpeed;
        this.cost = cost;
    }
    showCar2() {
        return `This is ${this.brand}. It has ${this.engine} engine and max speed equal to ${this.maxSpeed}. Approximatley cost of the car is ${this.cost}.`
    }
}
const car1 = new sportCar("Lamborghini", "V10", "350", "320000$").showCar1();
console.log(car1);
const car2 = new luxuryCar("Bentley Bentayga", "V8", "300", "240000$").showCar2();
console.log(car2)