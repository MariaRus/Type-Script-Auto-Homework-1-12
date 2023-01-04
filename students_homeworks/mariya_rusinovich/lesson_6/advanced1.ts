/*Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.*/

const results: any = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
}

const resultsTransformed: any = results;
resultsTransformed[0] = "ноль";
resultsTransformed[1] = "один";
resultsTransformed[2] = "два";
resultsTransformed[3] = "три";
resultsTransformed[4] = "четыре";
resultsTransformed[5] = "пять";
resultsTransformed[6] = "шесть";
resultsTransformed[7] = "семь";
resultsTransformed[8] = "восемь";
resultsTransformed[9] = "девять";

const getScore = (a: number, b: number) => {
    console.log(`Счет ${resultsTransformed[a]} : ${resultsTransformed[b]}`);
}

getScore(2, 5);