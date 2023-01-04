/*Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

> ['member 1: Darya', 'member 2: Masha', ... etc]

```javascript
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

/*1*/
const member = users.map((value:string, index: number) => {
    return "member " + (index +1) + ": " + value
});
console.log(member);

/*2*/
function member1(x:string[]) {
    for (let i = 0; i < x.length; i++) {
        x[i] = "member " + (i + 1) + ": " + x[i]
    }
    console.log(users);
}

member1(users);
