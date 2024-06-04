// 5*. Напишите рекурсивную функцию, которая принимает на вход число 
//и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. 
//И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число.
// Например при подаче числа 19 (1+9=10>9, потому 1+0=1) 
//выводится 1

function sumOfDigits(num){
    let digits = num.toString().split("");
    let sum = 0;
    for(i = 0; i< digits.length; i ++){
        sum+= +digits[i];
    }
    if(sum >9){
        return sumOfDigits(sum)
    }else{
        return sum}
    }
console.log(sumOfDigits(189));

// 6*. Написать функцию, которая принимает на вход строку с текстом,
// и заменяет каждую пару стоящих подряд идентичных букв на одну 
//следующую в алфавите, 
//     и так пока в тексте не останется двух одинаковых букв 
//стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d

function cutDoubles(str){
    let letters = str.split("");
    for(let i =0; i< letters.length; i++){
        if (letters[i] === letters[i+1]){
        letters.splice(i, 2, String.fromCodePoint(str.charCodeAt(i)+1));
        let str1 = letters.join("");
         return cutDoubles(str1);
    }
}return letters.join("")
}
console.log(cutDoubles('aabbhhfddddc'))
console.log(cutDoubles('aabc'))