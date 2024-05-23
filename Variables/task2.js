/* Task2*. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
1.  x2 - 6x + 9 = 0. - один корень
2.  x2 - 4x - 5 = 0. - два корня
*/
let firstDiscriminant = (-6) ** 2 - 4 * 9;
let firstRoot = (-6 + Math.sqrt(firstDiscriminant)) / 2;


let secondDiscriminant = (-4) ** 2 - 4 * (-5);
let secondRoot1 = (-4 + Math.sqrt(secondDiscriminant)) / 2;
let secondRoot2 = (-4 - Math.sqrt(secondDiscriminant)) / 2;

console.log("Ответ к уравнению 1: " + firstRoot);
console.log("Ответ к уравнению 2: " + secondRoot1 + " и " + secondRoot2);