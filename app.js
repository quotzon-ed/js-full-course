'use strict';

let money = +prompt("Ваш бюджет на месяц, руб."),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// let i = 1;
// while (i < 3) {
//     let good = prompt("Введите обязательную статью расходов в этом месяце №" + i),
//         cost = +prompt("Во сколько обойдется?");

//     if ( (typeof(good)) === 'string' && (typeof(good)) != null && (typeof(cost)) !=0 && good != '' && cost != '' && good.length < 50 ) {
//         console.log("done");
//         appData.expenses[good] = cost;
//         i++;
//     } else {
//         alert("Вы допустили ошибку. Начните заново!");
//     }
// }

// do {
//     let good = prompt("Введите обязательную статью расходов в этом месяце №" + i),
//         cost = +prompt("Во сколько обойдется?");

//     if ( (typeof(good)) === 'string' && (typeof(good)) != null && (typeof(cost)) !=0 && good != '' && cost != '' && good.length < 50 ) {
//         console.log("done");
//         appData.expenses[good] = cost;
//         i++;
//     } else {
//         alert("Вы допустили ошибку. Начните заново!");
//     }
// } while (i < 3)

for (let i = 1; i < 3; i++) {
    let good = prompt("Введите обязательную статью расходов в этом месяце №" + i),
        cost = +prompt("Во сколько обойдется?");

    if ( (typeof(good)) === 'string' && (typeof(good)) != null && (typeof(cost)) !=0 && good != '' && cost != '' && good.length < 50 ) {
        console.log("done");
        appData.expenses[good] = cost;
    } else {
        alert("Вы допустили ошибку. Начните заново!");
        i--;
        continue
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ваш ежедневный бюджет: " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}