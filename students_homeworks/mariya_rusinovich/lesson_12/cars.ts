import {Toyota} from "./secondClass";
import {BMW} from "./thirdClass";

const firstCar = new Toyota(4, "left-hand", 250, "Toyota Camry")
console.log(firstCar.sayCongrats(30000))

const secondCar = new BMW(4, "left-hand", 200, "BMW X5")
console.log(secondCar.getWheelsInformation())
console.log(secondCar.getSideInformation())
console.log(secondCar.getMaxSpeedInformation())