/*Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
Выведите все продукт, количество которых больше 100 гр.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

let vegsMap = new Map <string, number> ([
    ["cucumbers", 300],
    ["tomatoes", 200],
    ["pepper", 150],
    ["sour-cream", 110],
    ["salt", 10],
])

// function declaration:

function getVegetables (values: Map<string, number>): void  {
    // @ts-ignore
    for (let [key, value] of values) {
        if (value > 100) {
            console.log(key);
        }
    }
}

getVegetables(vegsMap);

// arrow function:

const getVegetables1 = (values: Map<string, number>): void => {
    // @ts-ignore
    for (let [key, value] of values) {
        if (value > 100) {
            console.log(key);
        }
    }
}

getVegetables1(vegsMap)