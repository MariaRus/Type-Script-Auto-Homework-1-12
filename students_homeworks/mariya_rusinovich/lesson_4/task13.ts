/*Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции*/

const start: number = Math.ceil (5.1);
const finish: number = Math.floor(55.5);
const res: number = Math.random() * (finish - start) + start;

console.log(res)