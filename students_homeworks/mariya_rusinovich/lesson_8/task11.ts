/*Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
Запишите соответствующие значения в переменные name, surname и age.
Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию:
{name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/


//1
const person1: any = {
    //name: "Петр",
    //surname: "Петров",
   // age: "20 лет"
};

function showInfo(x:any) {
    if (x.name == undefined) {
        x.name = "Аноним"
    }
    if (x.surname == undefined) {
        x.surname = "Анонимович"
    }
    if (x.age == undefined) {
        x.age = "? лет"
    }
    return x
}

console.log(showInfo(person1))

//2

const person2: any = {
    //name: "Петр",
    //surname: "Петров",
    //age: "20 лет"
};

const personInfo = (x:any) => {
    if (x.name == undefined) {
        x.name = "Аноним"
    }
    if (x.surname == undefined) {
        x.surname = "Анонимович"
    }
    if (x.age == undefined) {
        x.age = "? лет"
    }
    return x
}

console.log(personInfo(person2))