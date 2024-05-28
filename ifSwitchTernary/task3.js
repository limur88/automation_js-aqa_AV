// 2.Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных.
// И если он не number - кидалась ошибка в консоль.
// Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
const age = prompt("What is your age?");
const minAge = 18;
const maxAge = 60;

if (typeof age != "number") {
    console.log("Wrong type of data")
} else {
    const tooSmall = age < minAge;
    const good = age >= minAge && age < maxAge;
    const tooBig = age > maxAge;
    const outOfRange = 60;

    switch (tooSmall || good || tooBig || outOfRange) {
        case tooSmall: {
            console.log("You don't have access cause your age is ${age}. It's less then ${minAge}");
            break;
        }
        case good: {
            console.log("Welcome  !");
            break;
        }
        case tooBig: {
            console.log("Keep calm and watch Culture channel");
            break;
        }
        case outOfRange:
        default: {
            console.log("Technical work");
            break;
        }
    }
}
