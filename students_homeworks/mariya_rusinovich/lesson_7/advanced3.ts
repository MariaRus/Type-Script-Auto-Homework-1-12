/*Для решения задач используйте циклы **`for`** или **`for of`***/
/*Дан массив:
```javascript
   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
```
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные.
Оба массива затем выведите в консоль.*/

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positive = [];
const negative = [];
const different = [];
for(let i of mixedNumbers){
    if (i > 0){
        positive.push(i);
    }else if(i === 0){
        different.push(i);
    }else{
        negative.push(i);
    }
}
console.log(`Positive: ` + positive);
console.log(`Negative: ` + negative);
console.log(`Neither positive nor negative: ` + different);
