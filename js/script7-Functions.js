"use strict";

let num = 20; // глобальная функция

function showFirstMessage(text) { //имя функции это обычно глагол в camelCase, аргументы функции вызываются внтури круглых скобок
    console.log(text);
    let num = 10; //переменные внутри функции недоступны снаружи функции, локальная переменная. Глобальные и локальные переменные могут иметь одно и то же имя
    console.log(num); // при вызове переменных функция ищет сначала переменную среди локальных, если не находит, то потом уже обращается к глобальным
} //замыкание функции это сама функция вместе со всеми внешними переменными, которые ей доступны

showFirstMessage("Hello world!"); //вызов функции
console.log(num);

// function calc(a, b) {
//     return (a + b); //return - возвращает значение после вызова функции
//     console.log('asd'); //код после return не выполняется
// }

// console.log(calc(3, 5));
// console.log(calc(5, 8));

function ret(){
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

/*
function foo() {} - function declaration, создается до начала выполнения скрипта, можно использовать перед выполнением
*/

let logger = function() { //function expression, создается только тогда когда до неё доходит поток кода, можно вызвать только после объявления. "Переменная" функция
    console.log("Hello");
}; 
logger();

const calc = (a, b) => { return a + b }; //стрелочная функция, есть ограничения, будут в следуюших уроках