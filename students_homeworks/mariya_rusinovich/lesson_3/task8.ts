/*Даны две переменные:
```javascript
    let height = 15
    let width = 20
```
> С помощью условий выведите в консоль разработчика наибольшее число.*/

let height: number = 15;
let width: number = 20;

let largestNum: number = Math.max(height, width);
console.log(`The largest number is ${largestNum}`)