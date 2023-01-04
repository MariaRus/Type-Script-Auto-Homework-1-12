/*Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
+ процентная ставка в год — 17%,
+ количество лет — 5.
> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.*/

const percentRate = 17;
const years = 5;

function result(credit: number): number {
    let i = 0;
    let percent = 0;
    while (i < years) {
        percent += (credit / 100) * percentRate;
        i++;
    }
    return percent;
}

//let overpayment = result(50000);
console.log(result(50000));