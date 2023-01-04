/*С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

```javascript
    const numbers = [7, -4, 32, -90, 54, 32, -21]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

const numbers: number [] = [7, -4, 32, -90, 54, 32, -21];

// function declaration:

function getNewArr (arr: number []): void {
    let newArr: number [] = arr.filter((value: number) => value >= 0);
    console.log(newArr);
}

getNewArr(numbers)

// arrow function 1

const getNewArr1 = (arr: number []): void => {
    let newArr: number [] = arr.filter((value: number) => value >= 0);
    console.log(newArr);
}

getNewArr1(numbers)

//2
const getNewArr2: number[] = numbers.filter((value: number) => {
    return value > 0
});

console.log(getNewArr2)