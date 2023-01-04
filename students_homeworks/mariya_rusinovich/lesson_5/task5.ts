/*Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными,
найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
```
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```*/

const getSum = (a: number, b: number) => {
    let sum = 0;
    if (a === b) {
        return a || b;
    }
    if (a < b) {
        while (a <= b) {
            sum += a;
            a++;
        }
    } else if (a > b) {
        while (a >= b) {
            sum += b;
            b++;
        }
    }
    return sum;
};
console.log(`Sum of numbers  between 1 and 0 is ${getSum(1, 0)}`);
console.log(`Sum of numbers between 1 and 2 is ${getSum(1, 2)}`);
console.log(`Sum of numbers between 0 and 1 is ${getSum(0, 1)}`);
console.log(`Sum of numbers between 1 and 1 is ${getSum(1, 1)} as they are the same`);
console.log(`Sum of numbers between -1 and 0 is ${getSum(-1, 0)}`);
console.log(`Sum of numbers between -1 and 2 is ${getSum(-1, 2)}`);