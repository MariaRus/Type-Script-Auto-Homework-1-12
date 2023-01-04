/*Создать любой обьект с двумя ключами и любыми значениями в них,
а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true***/

//let key: string = "type"
let key: string = "salary"

const employee: {[key:string]: string|number} = {
    name: "Maria",
    age: 36,
    job: "QA engineer",
    type: "automation"
}

console.log(employee);

if (key in employee){
    console.log(true)
}else{
    console.log(false)
}