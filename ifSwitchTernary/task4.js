// 3.Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось,
// преобразовываясь в number
const age = prompt("What is your age?");
const minAge = 18;
const maxAge = 60;

const checkNumIsString = + age;

if (!checkNumIsString) {
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