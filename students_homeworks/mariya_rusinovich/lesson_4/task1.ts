/*Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие `Привет <Имя> <Фамилия>`
5 раз используя для каждого варианта разный регистр*/

const myName: string = "Мария";
const mySurname: string = "Русинович";

console.log("Привет, %s %s", myName.toUpperCase(), mySurname.toUpperCase());
console.log(`Привет, ${myName.toLowerCase()} ${mySurname.toLowerCase()}`);
console.log(`Привет, ${myName.toUpperCase()} ${mySurname.toLowerCase()}`);
console.log(`Привет, ${myName.toLowerCase()} ${mySurname.toUpperCase()}`);
console.log(`Привет, ${myName} ${mySurname}`);