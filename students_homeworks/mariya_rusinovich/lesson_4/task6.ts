/*Дана строка 'я учу typescript!'. С помощью метода split запишите каждое слово этой строки
в отдельный элемент массива. (в каждую ячейку массива)*/

const str: string = "я учу typescript!";

let strSplit: string[] = str.split(" ");
console.log(strSplit)