/*Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`.
И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя*/

const firstPerson = {
    name: "Maria",
};

const secondPerson = {
    name: "Andrei",
};

function useName (): void {
    console.log(`My name is ${this.name}.`);
}

useName.apply(firstPerson);
useName.call(secondPerson);

