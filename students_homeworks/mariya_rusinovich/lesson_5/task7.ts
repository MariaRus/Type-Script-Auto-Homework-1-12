/*Напишите самовызыввающуюся функцию подсчета факторила числа: число должно передаваться как параметр функции*/

const getFactorial = (number: number): any => {
    return number != 1 ? number * getFactorial(number - 1) : 1;
};

((number) => console.log(getFactorial(number)))(5);