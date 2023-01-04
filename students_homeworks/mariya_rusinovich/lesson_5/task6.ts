/*Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
+ булевое значение
+ функцию **foo** которая выводит в консоль свое имя
+ функцию **boo** которая выводит в консоль свое имя
> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo***/

const foo = () => console.log(foo.name);
const boo = () => console.log(boo.name);

const fooboo = (boolean: boolean, foo: () => void, boo: () => void): void =>
    boolean === true ? foo() : boo();

fooboo(true, foo, boo);