/*Самый высокий и самый низкий

+ В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

```javascript
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
```

> Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.*/

const chosenNumbers = (numbers: any): string => {
    let newStr: number [] = numbers.split(" ");
    let min: number = Math.min(...newStr);
    let max: number = Math.max(...newStr);
    return `${max} ${min}`;
}

console.log(chosenNumbers("1 2 3 4 5"))
console.log(chosenNumbers("1 2 -3 4 5"))
console.log(chosenNumbers("1 9 3 4 -5"))