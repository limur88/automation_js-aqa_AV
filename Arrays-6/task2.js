// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'] 
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
// const myPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Peperoni','4 meat', 'Hawai', 'Belladonna', 'Caprichosa', 'Diablo', '4 cheeses'];

function comparePizzas (my, other){
    const myLowerCase = my.map(word => word.toLowerCase());
    const otherLowerCase = other.map(word => word.toLowerCase());
    let unique = [];
    for(let i = 0; i< myLowerCase.length; i++){
           if (otherLowerCase.indexOf(myLowerCase[i]) == -1) {
            unique.push(my[i]);
        }
    } 
    return unique.length ? unique : null;
}
console.log(comparePizzas (myPizzas, competitorPizzas))

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

const sentence = "I love to read book"
  function returnLongestWord(sentence){
    let words = sentence.split(" ");
    let wordLength = [];
    for (const word of words){
        wordLength.push(word.length);
    }
    
    let greatest = Math.max(...wordLength);
    let answer = []
    for (const word of words){
        if (word.length == greatest){
        answer.push(word);
    }
}
    return answer;
  }
  console.log(returnLongestWord("I love to read book"))

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

let numbers = [1, 1, 1, 1, 5, 5, 10, 3, 8, 10, 1, 1, 1, 5, 5, 6, 9];
for(let i = 0; i < numbers.length -1; i++){
    for (let j = i + 1; j < numbers.length; j++){
        if(numbers[i] === numbers[j]){
            numbers.splice(j, 1);
            j--;
        }
    }
}
console.log(numbers);


// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkIfPolyndrom (phrase){
    let word = phrase.toLowerCase();
    let count = 0;
    let i = 0;
    while (word[i] == word[word.length - 1 -i] && i< word.length){
    count ++;
    i++;
}
return count == word.length;
}
console.log(`Word is palindrom: ${checkIfPolyndrom ('Anvfna')}`)