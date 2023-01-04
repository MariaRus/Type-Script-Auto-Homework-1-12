/*Для решения задач используйте циклы **`for`** или **`for of`***/
/*Реализуйте функцию которая будет проверять, является ли слово палиндромом.*/

const checkPalindrome = (word: string): string => {
    let newWord = word.split("");
    let newWord1 = word.split("").reverse();
    for (let i: number = 0; i < newWord.length; i++) {
        if (newWord[i] !== newWord1[i]) return "it's not a palindrome";
    }
    return "it's a palindrome";
}

console.log(checkPalindrome("Maria"));
console.log(checkPalindrome("dad"));