/* Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

let digit = 5;
let firstAdditive = digit;
let secondAdditive = String(digit) + digit;
let thirdAdditive = secondAdditive + digit;
let sum = digit + (+ secondAdditive) + (+ thirdAdditive);
console.log(sum);

let number = prompt('Enter digit from 1 to 9');
let first = number;
let second = String(number) + number;
let third = second + number;
let summ = digit + (+ second) + (+ third);
console.log(summ);
