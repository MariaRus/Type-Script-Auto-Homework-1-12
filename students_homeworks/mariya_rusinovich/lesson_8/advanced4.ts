/*Изограммы

+ Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

```javascript
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
```*/

function checkIsogram(word:string) {
    let letterArr = Array.from(new Set(word.split("").map((v) => v.toLowerCase())))
    return  word.toLowerCase() == letterArr.join('')
}

console.log(checkIsogram("Dermatoglyphics"))
console.log(checkIsogram("aba"))
console.log(checkIsogram("moOse"))