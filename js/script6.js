"use strict";

if (4 == 9) {
    console.log('ok');
} else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error');
//тернарный оператор 
//num === 50 - условие, после ? выражение если правда, после : выражение если нет

const num1 = 50;

switch (num1) {
    case 49:
        console.log("error");
        break;
    case 100:
        console.log("error");
        break;
    case '50':
        console.log("true")
        break;
    default:
        console.log("Not this time");
        break;
}


// Циклы
let num2 = 50;

// while (num2 <= 55) {
//     console.log(num2);
//     num2++;
// }

// do {
//     console.log(num2);
//     num2++
// }
// while (num2 < 55);

for (i = 1; i < 10; i++) {
    console.log(num2);
    num2++;
}

for (i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
}