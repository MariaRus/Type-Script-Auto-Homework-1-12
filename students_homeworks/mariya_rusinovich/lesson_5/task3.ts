/*Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
+ строку
+ значение от
+ значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по*/

const trimString = (str: string, from: number, to: number): void => {
    let res = str.slice(from, to);
    console.log(res);
};

trimString("typescript", 4, 10);