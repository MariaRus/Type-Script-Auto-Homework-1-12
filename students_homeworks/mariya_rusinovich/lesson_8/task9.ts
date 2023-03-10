/*Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
```javascript
    const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/
const numbers: number [] = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];

let newNumbers: number [] = [];

// function declaration:

function createNewArr (): void {
    // @ts-ignore
    newNumbers = [...new Set<number>(numbers)];
    console.log(newNumbers);
}

createNewArr()

// arrow function:

const createNewArr1 = (): void => {
    // @ts-ignore
    newNumbers = [...new Set<number>(numbers)];
    console.log(newNumbers);
}

createNewArr1()