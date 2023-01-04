/*Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
Для решения этой задачи нам помогут логические операторы **`|| &&`**.
```javascript
    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true
```
> Ответ поместите в переменную **shouldGoToWork***/
let key: boolean = true;
let documents: boolean = true;
let pen: boolean = true;
let apple: boolean = false;
let orange: boolean = true;
let shouldGoToWork: boolean;

if (key && documents && pen && (apple || orange)) {
  shouldGoToWork = true;
  console.log("I can go to work.");
} else {
  shouldGoToWork = false;
  console.log("I cannot go to work.");
}