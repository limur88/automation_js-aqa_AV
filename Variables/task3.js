/* Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

const digit = 5;
const firstAdditive = digit;
const secondAdditive = String(digit) + digit;
const thirdAdditive = secondAdditive + digit;
const sum = digit + (+ secondAdditive) + (+ thirdAdditive);
console.log(sum);

