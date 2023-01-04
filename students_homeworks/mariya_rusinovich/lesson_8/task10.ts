/*Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
а если нет второго - в переменную elem2 запишите значение 'bbb'.
Первый элемент никуда записывать не надо.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

let elem2: number | string;
let elem3: number | string;

// function declaration:

function addElem (...arr: any []): any {
    if (arr[1] !== undefined && arr[2] !== undefined) {
        elem2 = arr [1];
        elem3 = arr [2];
    } else if (arr[0] && arr[2] !== undefined) {
        elem2 = "bbb";
        elem3 = arr [2];
    } else if (arr[0] && arr[1] !== undefined) {
        elem2 = arr [1];
        elem3 = "eee";
    } else {
        elem2 = "bbb";
        elem3 = "eee";
    }
    console.log(elem2, elem3);
}

addElem(1, 2, 3)
addElem(1, 2)
addElem(1)

// arrow function:

const addElem1 = (...arr: any []): any => {
    if (arr[1] !== undefined && arr[2] !== undefined) {
        elem2 = arr [1];
        elem3 = arr [2];
    } else if (arr[0] && arr[2] !== undefined) {
        elem2 = "bbb";
        elem3 = arr [2];
    } else if (arr[0] && arr[1] !== undefined) {
        elem2 = arr [1];
        elem3 = "eee";
    } else {
        elem2 = "bbb";
        elem3 = "eee";
    }
    console.log(elem2, elem3);
}

addElem1(1, 2, 3)
addElem1(1, 2)
addElem1(1)