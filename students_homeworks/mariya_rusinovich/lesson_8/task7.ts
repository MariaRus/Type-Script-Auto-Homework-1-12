/*Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
Реализуйте оба варианта, когда результирущее значение true или false*/

// function declaration:

function checkRes (...arr: number[]): void {
    arr.map((value) => value ** 2)
        .every((value: any) => {
            if (value.toString().split("").reduce((acc: string, num: string) => +acc + +num) % 2 === 0) {
                console.log("Even result");
            }
            else {
                console.log("Result is not even");
            }
        });
}

checkRes(5, 12, 23)

// arrow function:

const checkRes1 = (...arr: number[]): void => {
    arr.map((value) => value ** 2)
        .every((value: any) => {
            if (value.toString().split("").reduce((acc: string, num: string) => +acc + +num) % 2 === 0) {
                console.log("Even result");
            }
            else {
                console.log("Result is not even");
            }
        });
}

checkRes1(11, 13, 19)