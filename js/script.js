" use strict";

//const ege = prompt("Сколько Вам лет", "");

//(ege < 18) ? console.log("Доступ запрещен") : console.log("Добро пожаловать");

const ege = +prompt("Сколько будет 2+2*2?", '');

switch (ege) {
    case 2+2*2:
        console.log("правильно!");
        break;
        case 2+2*2:
            console.log("неправильно!");
            break;
        default:
            console.log("Первым выполняется умножение.");
            break;
}