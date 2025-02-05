"use strict";

// let a = 5,
//     b = a; //при работе с примитивными данными передаются значения

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = { 
//     a: 5,
//     b: 1
// }

// const copy = obj; //при работе с объектами (массивами) идёи передача по ссылке

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));
clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); //поверхностная копия массива
newArray[1] = "alksf";
// console.log(newArray);
// console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "lj", "blogger"],
      internet = [...video, ...blogs, "fb"]; //поверхностная копия. "..." - оператор разворота, spread
//console.log(internet)

const array = ["a", "b"];

const newArray1 = [...array] //поверхностная копия объекта

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);