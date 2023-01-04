/*Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте,
это же поле не меняется во втором объекте. Объекты должны быть описаны с помощью типа или интерфейса

```javascript
const cat = {
      name: 'Енчик',
      age: 3,
   }*/

type ICat = {
    name: string,
    age: number,
}

const cat: ICat = {
    name: "Мурка",
    age: 3,
}

// №1
const cat2: any = JSON.parse(JSON.stringify(cat));

cat2.name = "Розочка";
console.log(cat);
console.log(cat2);


// №2
const cat3: any = {};
Object.assign(cat3, cat);

cat3.name = "Пушок";
console.log(cat);
console.log(cat3);