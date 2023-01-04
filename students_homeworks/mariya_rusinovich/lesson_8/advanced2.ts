/*Нет истории, нет теории

+ В приведенных ниже примерах показано, как написать функцию:

```javascript
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

> Параметр - это строка, которая включает только буквы от a..z и A..Z.*/

const getStr = (str: string): string => {
    let newStr: string [] = str.split("");
    let res: string [] = newStr.reduce((acc, value, index) => {
        return acc + value.toUpperCase() + value.toLowerCase().repeat(index) + "-"
    }, "").split("");
    res.pop();
    return res.join("");
}

console.log(getStr("RqAEzty"))