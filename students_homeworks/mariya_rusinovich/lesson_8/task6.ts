/*Используя метод **`some`** проверьте то, что в массиве есть элемент кратный 3 и 5.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
 Реализуйте оба варианта, когда результирущее значение true или false*/

const numbers: number [] = [5, 9, 13, 24, 54, 10, 45, 99, 1, 5]
const numbers2: number [] = [4, 7, 11, 52]

//1
const num = numbers.some((value: number) =>
    value % 3 == 0 && value % 5 == 0
);
/* const num = numbers2.some((value: number) =>
    value % 3 == 0 && value % 5 == 0
); */

console.log(num);

//2
function num2(value:number) {
    return value % 3 == 0 && value % 5 == 0
}

console.log(numbers.some(num2));
//console.log(numbers2.some(num2));