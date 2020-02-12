"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");

let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let state = prompt("Введите обязательную статью расходов в этом месяце", "сигареты");

let sigMoney = +prompt("Во сколько обойдется?", "");

let appData = {

    budget: money,
    timeData: time,
    expenses: {
        state: sigMoney
    },
    optionalExpenses: "",
    income: "",
    savings: false
};



alert(sigMoney / 30);