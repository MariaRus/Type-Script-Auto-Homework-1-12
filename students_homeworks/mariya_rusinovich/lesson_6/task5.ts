/*Дан обьект:

```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную*/
let totalSalary: number = 0;
let numberOfEmployees: number;
let averageSalary: number;

let salaries: {[key: string]: number}= {
    andrey: 500,
    sveta: 413,
    anton: 987,
    konstantin: 664,
    alexandra: 199
}

numberOfEmployees = Object.keys(salaries).length;
//console.log(numberOfEmployees);

for (const salary in salaries) {
    totalSalary += salaries[salary];
}
//console.log(totalSalary);

averageSalary = totalSalary / numberOfEmployees;
console.log(`Average salary: ${averageSalary}`);