/*Имеется три переменные:

```javascript
  let a = 1
  let b = 2
  let c = "белых медведей"
```

Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.*/
let num1: number = 1;
let num2: number = 2;
let text: string = "белых медведей";

console.log(`${num1.toString() + num2.toString()} ${text}`);