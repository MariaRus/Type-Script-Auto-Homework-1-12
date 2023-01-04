/*Для решения задач используйте циклы **`for`** или **`for of`***/
/*```javascript
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
```
> Выведите в консоль среднее значение чисел в многомерном массиве.*/

const matrix: any = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let numberOfElem: number = 0;
let sum: number = 0;
let averageSum: number;

for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
    numberOfElem += matrix[i].length
}

averageSum = sum / numberOfElem;
console.log(averageSum);