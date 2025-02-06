"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};
//options.makeTest();

const {border, background} = options.colors; //деструктуризация
console.log(background);

//console.log(Object.keys(options).length);

// console.log(options.colors.border); //обращение к свойствам объекта

// delete options.name; //удаление свойства объекта
// console.log(options);

 let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойствo ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойствo ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

