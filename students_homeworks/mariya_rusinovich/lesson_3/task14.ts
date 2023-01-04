/*Поменяйте значение переменных местами не создавая дополнительной переменной:
```javascript
    let a = 4
    let b = 3
```*/
let a: number = 4;
let b: number = 3;

a = a + b;
b = a - b;
a = a - b;
console.log(`Now a is ${a} and b is ${b}`);