/*Создайте переменные:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году

Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`***/
let secInMinute: number = 60;
let minInHour: number = 60;
let hoursInDay: number = 24;
let daysInYear: number = 365;
let myAge: number = 36;
let myAgeInSeconds: number = secInMinute * minInHour * hoursInDay * daysInYear * myAge;

console.log(myAgeInSeconds);