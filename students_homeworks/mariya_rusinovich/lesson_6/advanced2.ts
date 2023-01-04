/*Даны два одинаковых обьекта. Сравните их так чтобы они были равны

```javascript
    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }*/

let student1: any = {
    name: "Polina",
    age: 27,
}

let student2 = {
    name: "Polina",
    age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2));