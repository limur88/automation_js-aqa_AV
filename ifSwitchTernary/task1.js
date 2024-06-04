// 1. Создать переменную "minAge" и присвоить ей значение 18
// 2. Создать переменную "maxAge" и присвоить ей значение 60
// 3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
// 4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
//   - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
//   - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
//   - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
//   - Иначе выводите "Technical work".
// 5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

const age = prompt("What is your age?");
const minAge = 18;
const maxAge = 60;

// 4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
//   - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
//   - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
//   - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
//   - Иначе выводите "Technical work".
// 5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

if (age < minAge) {
    console.log("You don't have access cause your age is ${age}. It's less then ${minAge}")
} else if (age >= minAge && age < maxAge) {
    console.log("Welcome  !")
} else if (age > maxAge) {
    console.log("Keep calm and watch Culture channel")
} else {
    console.log("Technical work")
}
