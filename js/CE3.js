// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (i = 5; i <= 10; i++) {
        console.log(i);
    }
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (i = 20; i > 9; i--) {
        if (i === 13) {
            break;
        }
        
        console.log(i);
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    
    for (i = 2; i <= 10; i = i + 2) {
        console.log(i);
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}



function fourthTask() {
    // Пишем решение вот тут
    let num = 3;
    while (num <= 15) {
        console.log(num);
        num = num + 2;
    }
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    let num1 = 5;
    for (i = 0; i < 6; i++){
        arrayOfNumbers[i] = num1;
        num1++;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}