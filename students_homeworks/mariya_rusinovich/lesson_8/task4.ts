/*Используя метод **`reduce`** получите сумму всех чисел массива.

```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

const fibonacci: number [] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// function declaration:

function fibonacci1(res:number, value:number) {
    return res + value
}

console.log(fibonacci.reduce(fibonacci1));

// arrow function:

const fibonacci2: number = fibonacci.reduce((acc: number, value: number) => {
    return acc + value
},0);

console.log(fibonacci2);