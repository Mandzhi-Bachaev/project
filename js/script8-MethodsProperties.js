"use strict";

const str = 'teSt';
const arr = [1, 4, 5];

//console.log(arr.length); // .length - свойство возвращающее длину

//console.log (str.toUpperCase()); // .toUpperCase() не меняет значение в оригинальной переменной
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q")); //.indexOf() возвращает -1 если не находит значение, если находит возвразает индекс начала подстроки

const log = "Hello world";

console.log(log.slice(6, 11)); //указывается не включая, первое значение включая, кторое не включая. Можно не указывать финальное значение, вернет до конца, можно испольлзовать отрицательные значения

console.log(log.substring(6, 11)); //не поддерживает отрицательные значения

console.log(log.substr(6, 5)); //первы аргумент это начало вырезаемого, второй аргумент длина вырезаемого

const num = 12.2;

console.log(Math.round(num)); //округление до целого

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));