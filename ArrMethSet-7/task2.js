// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку 
// таким образом, чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в 
// предложении. Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

const sentence = 'I am the best AQA ever!';
const countedLetters = [sentence.toLowerCase()].map(countLetters).flat();

function countLetters( phrase){
    let counted = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < phrase.length; i++){
        if (alphabet.indexOf(phrase[i]) >= 0){
        counted.push(phrase.split(phrase[i]).length -1);
    }else{
         counted.push(phrase[i]);
        }
    }return counted;
}

console.log(countedLetters);

// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен 
// и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
const totalPrice = prices.reduce((price, start) => start + price, 0);
const averagePrice = totalPrice /prices.length;
console.log(`Итого: ${totalPrice}$, средняя цена товара ${averagePrice}$`);

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный 
// массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
const sentence2 = ['I', 'am', 'thee', 'best', 'AQAEngineer', 'evir'];
console.log(sentence2.sort(compareVowelCount));
function countVowels (word){
    const vowelsLetters = 'aoeiuAOEIU';
    let vowels =0;
    
    for (let i =0; i < word.length; i++){
        let wordLowerCase = word.toLowerCase();
        if (vowelsLetters.includes(wordLowerCase[i])){
            vowels ++;
    }
}
    return vowels;
}

function compareVowelCount(a, b) {
    return countVowels(a) - countVowels(b);
}

// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество 
// элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. 
//   (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
//   Пример:

const arr = [[['(']], ')', ')', '(', ')', ')', ['(', ['('], [')']]];
const simplified = arr.flat(Infinity);
// solution 1
simplified.sort();
if (simplified.length % 2 || simplified[simplified.length /2] != simplified[simplified.length /2 +1]){
    console.log("Not all have pairs")
} else{
    console.log("All have pairs")
}
//solution 2
const opened = simplified.filter(item => item == "(");
const closed = simplified.filter(item => item == ")");
console.log(opened.length == closed.length)