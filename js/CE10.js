const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function() {
        const {languages} = personalPlanPeter.skills;
        const {age} = personalPlanPeter;
        let result = "Мне ";
        result += `${age} и я владею языками:`;
        
        for (let value of languages){
            result = result + " " + value.toUpperCase();
        }
        return result;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
//console.log(showExperience(personalPlanPeter));



function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let result = "";
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}
console.log(showProgrammingLangs(personalPlanPeter));
/*
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'
*/