/*Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:
    - доступ
    - морпех
    - наледь
    - попрек
    - рубило*/
let word1: string = "доступ";
let word2: string = "морпех";
let word3: string = "наледь";
let word4: string = "попрек";
let word5: string = "рубило";

let lengthWords: number = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log("Total length of given words is " + lengthWords);