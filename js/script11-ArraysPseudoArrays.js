"use strict";

const arr = [1, 72, 35, 6, 80];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}
// arr[99] = 100;
// console.log(arr.length);
 console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри ${arr}`)
// });

//arr.pop(); //удаляет последний элемент массива
//arr.push(10); //добавляет новый элемент массива в конец

//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) { //перебор каждого элемента массива
//     console.log(value);
// }

const str = "asd, asf, adt, wet, wragwrgf, fasdgasg, fag, fesg"
const products = str.split(", "); //формирование массива из строки с разделением 
//console.log(products.join("; ")); // формирование строки из массива
products.sort(); //сортировка массивов, сортирует как строки
console.log(products);
