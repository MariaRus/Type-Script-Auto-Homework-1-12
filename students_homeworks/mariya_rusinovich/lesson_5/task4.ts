/*Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
> Для 2021 это будет 5.*/

function getSumNumbers(number: number): void {
    let result = 0;
    let numToStr = number.toString();
    let numArray = numToStr.split("");
    for (let key of numArray) {
        result += Number(key);
    }
    console.log(`${number} sums into ${result}`);
}

getSumNumbers(2021);