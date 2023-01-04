/*Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.*/
const employee: {[key:string]: string|number} = {
    name: "Maria",
    age: 36,
    job: "QA engineer",
    type: "automation"
}

console.log(employee);

delete employee.job;
delete employee.type;

console.log(employee);