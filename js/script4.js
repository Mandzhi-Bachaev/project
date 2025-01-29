"use strict";

console.log('arr' + ' - object'); // конкатенация
console.log('4' + ' - object');

console.log(4 + +"5"); // унарный плюс, преобразование строки в число

let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(incr++); // постфиксная форма сначала возвращает оригинальное значение и потом его уменьшает или увеличивает
console.log(decr--);

console.log(incr++); // префиксная форма сначала уменьшает или увеличивает значение и потом уже возврашает его
console.log(decr--);

console.log(5%2); // остаток от деления

console.log(2 * 4 == "8"); // == сравнение по значению
console.log(2 * 8 === "8"); // === строгое сравнение - сравнение по типу и значению

const isChecked = true,
      isClosed = false;

console.log(isChecked && isClosed); // true && true => true, false && true => false;

console.log(isChecked || isClosed); // true || false => true;

console.log(!true); // ! - отрицание