//let money = prompt("Ваш бюджет на месяц?);
//console.log(money);

//allert("Hello World");

// let answer = confirm("Are you here?");
// console.log(answer);

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(money , time);

let appData = {
    moneyData : money,
    timeData : time,
    expenses:{
        answerOne,
        answerDva
        },
    optionalExpenses : "",
    income : "",
    savings : false
};

var answerOne = prompt("Введите обязательную статью расходов в этом месяце"),
    answerDva = prompt("Во сколько обойдется?");

console.log(answerOne , answerDva );

// let expenses = {
//     “answerOne” : “answerDva”
//     };

let moneyDayOne = ( money / 30 ); 

alert(moneyDayOne);


