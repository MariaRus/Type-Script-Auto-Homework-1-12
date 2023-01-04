/*Дан обьект:

```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```
C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.*/

const student: {[key: string]: string|number|boolean} = {
    name: "John",
    age: 19,
    isHappy: true
}

for (const item in student) {
    console.log(`key: ${item}`)
}

for (const value in student) {
    console.log(`value: ${student[value]}`)
}