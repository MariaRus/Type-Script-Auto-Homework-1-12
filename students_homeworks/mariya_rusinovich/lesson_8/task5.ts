/*Используя метод **`find`** найдите в массиве первое четное число.

```javascript
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]*/

const numbers: number [] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
//1
const evenNumber = (arr: number []): void => {
    let num: any = arr.find((value) => value % 2 === 0);
    console.log(num);
}

evenNumber(numbers)

//2
function getEvenNumber(value:number) {
    return value % 2 == 0
}

console.log(numbers.find(getEvenNumber));