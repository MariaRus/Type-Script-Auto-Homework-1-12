/*Дан массив:

```javascript
    const binary = [0, 0, 0, 0]
```

+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.

> [0, 0, 0, 0] -> '0101010'*/

const binary: number [] = [0, 0, 0, 0];
const strBinary: string = binary.join("1");

console.log(strBinary);