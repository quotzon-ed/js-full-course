'use strict';

let money,
    time,
    good1,
    good2,
    cost1,
    cost2,
    monthBalance,
    daylyExpenses;

money = +prompt("Ваш бюджет на месяц, руб.");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

good1 = prompt("Введите обязательную статью расходов в этом месяце");
cost1 = +prompt("Во сколько обойдется?");
good2 = prompt("Введите обязательную статью расходов в этом месяце");
cost2 = +prompt("Во сколько обойдется?");

appData.expenses.good1 = cost1;
appData.expenses.good2 = cost2;

monthBalance = appData.budget - (appData.expenses.good1 + appData.expenses.good2);
daylyExpenses = monthBalance / 30;

alert("Ваш ежедневный бюджет: " + daylyExpenses + "руб.");