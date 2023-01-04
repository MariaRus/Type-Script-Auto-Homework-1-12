/*Дана строка 'я учу typescript!'.
Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу',
если нет - вывести строку `Данной подстроки нет`*/

const phrase: string = "Я учу typescript";
const word: string = "учу";

if (phrase.includes(word)) {
    console.log(phrase.indexOf(word));
} else {
    console.log("Данной подстроки нет")
}