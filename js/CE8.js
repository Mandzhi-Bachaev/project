"use strit";
// Место для первой задачи
function getTimeFromMinutes(num) {
    if (Number.isInteger(num) != true || num < 0) {
        return ("Ошибка, проверьте данные");
    } else {
        let minutes = num % 60,
            hours = (num - minutes) / 60;
        
        if (hours % 10 == 1) {
            return ("Это " + hours + " час и " + minutes + " минут");
        } else if ((hours % 10 == 2) || (hours % 10 == 3) || (hours % 10 == 4)) {
            return ("Это " + hours + " часа и " + minutes + " минут");
        } else if ((hours % 10 == 5) || (hours % 10 == 6) || (hours % 10 == 7 || (hours % 10 == 8)) || (hours % 10 == 9) || (hours % 10 == 0)) {
            return ("Это " + hours + " часов и " + minutes + " минут");
        }
    }
}



// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
    if (typeof(num1) != "number" || typeof(num2) != "number" || typeof(num3) != "number" || typeof(num4) != "number"){
        return 0;
    } else {
        let firstMax = num1,
            secondMax = num3;
        if (firstMax < num2) {
            firstMax = num2;
        }
        if (secondMax < num4) {
            secondMax = num4;
        }
        let lastMax = firstMax;
        if (lastMax < secondMax) {
            lastMax = secondMax;
        }
        return lastMax;
    }
}
console.log(findMaxNumber(12, 3232, 432, 64));
/*
1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)


*/