import fetch from "node-fetch";

const URL: string = "https://jsonplaceholder.typicode.com/todos";
let response: any;
interface Iobj {
    id: number,
    title: string
}
let newArr: Iobj [] = [];

const getTodos = async () => {
    response = await fetch(URL);
    return await response.json();
};

const printTodos = async (func: Promise<any>) => {
    await func;
for (let item of await func) {
    let obj: Iobj = {
        id: item.id,
        title: item.title
    }
    newArr.push(obj)
}
console.log(newArr)
}

printTodos(getTodos())