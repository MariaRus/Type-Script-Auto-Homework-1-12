/*Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
К примеру `This car has 3 doors and this is left-hand drive car`*/

const firstCar = {
    name: "Subaru"
}

const secondCar = {
    name: "Ford"
}

function showCar (doors: number, hand: string): void {
    console.log(`${this.name} car has ${doors} doors and this is a ${hand}-hand drive car`);
}
showCar.apply(firstCar,[4,"left"]);
showCar.apply(secondCar,[3,"right"]);