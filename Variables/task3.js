/* Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

let digit = 3;
let firstAdditive = digit;
let secondAdditive = String(digit) + digit;
let thirdAdditive = secondAdditive + digit;
let sum = digit + (+ secondAdditive) + (+ thirdAdditive);
console.log(sum);