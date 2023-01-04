/*Написать программу, которая принимает число:
    1. Если число делится без остатка на 5 выводим сообщение Fiz
    2. Если число делится без остатка на 3 выводим сообшение Buz
    3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz*/
let variable: number = 15;

if (variable % 3 === 0 && variable % 5 === 0) {
  console.log("FizBuz");
} else if (variable % 5 === 0) {
  console.log("Fiz");
} else if (variable % 3 === 0) {
  console.log("Buz");
} else {
  console.log("This number is not divided to 3 or 5");
}