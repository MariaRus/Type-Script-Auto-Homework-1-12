/*Дана строка 'я учу typescript!'. Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).*/

const str: string = "я учу typescript!";

console.log(str.slice(2,5));
console.log(str.substring(5,16));

