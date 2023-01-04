/*Дан массив:
```javascript
    const numbers = [5, 43, 63, 23, 90]
```
Удалите все элементы в массиве и выведите в консоль полученный результат.
> Реализуйте решение двумя способами.*/

const numbers: number [] = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

const numbers2 = [5, 43, 63, 23, 90];
numbers2.shift(), numbers2.shift(), numbers2.shift(), numbers2.shift(), numbers2.shift();
console.log(numbers2);

const numbers3 = [5, 43, 63, 23, 90];
numbers3.pop(), numbers3.pop(), numbers3.pop(),numbers3.pop(), numbers3.pop();
console.log(numbers3)