/*Для решения задач используйте циклы **`for`** или **`for of`***/
/*Создать массив длинной не менее 5, из динамически созданных случайных чисел.
Далее написать алгоритм который берет все числа из исходного массива,
возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.*/

let arrOne = [];
for (let i = 0; i < 5; i++){
    arrOne.push(Math.floor(Math.random() * 10));
}
console.log(arrOne);

let arrTwo = [];
for(let cub of arrOne){
    arrTwo.push(Math.pow(cub, 3))
}
console.log(arrTwo);