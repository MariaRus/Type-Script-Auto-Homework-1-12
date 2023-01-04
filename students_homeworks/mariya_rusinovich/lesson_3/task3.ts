/*Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку,
а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.*/
let count: number = 42;
let userName: string = "42";

// Number to string:
let countToString: string = String(count);
console.log(countToString);
let countToString2: string = "" + count;
console.log(countToString2);
let countToString3: string = `${count}`;
console.log(countToString3);
let countToString4: string = count.toString();
console.log(countToString4);

// String to number:
let userNameToNumber: number = +userName;
console.log(userNameToNumber);
let userNameToNumber2: number = Number(userName);
console.log(userNameToNumber2);
let userNameToNumber3: number = parseInt(userName);
console.log(userNameToNumber3);