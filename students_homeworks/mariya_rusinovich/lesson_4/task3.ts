/*Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке.
Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`*/

const randomStr: string = "My name is Maria";
const symbolPosition: number = 11;

if (symbolPosition <= randomStr.length) {
    console.log(`Needed symbol according to the given position is ${randomStr.charAt(symbolPosition)}`)
} else {
    console.log("Вы вышли за границу строки")
}