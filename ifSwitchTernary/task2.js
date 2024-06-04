//1.Реализовать Task 1 через switch
const age = prompt("What is your age?");
const minAge = 18;
const maxAge = 60;

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