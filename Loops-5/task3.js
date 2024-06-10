// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const word = "anna voro--oonova";
const vowelsLetters = 'aoeiu';
const consonantLetters = 'qwrtypsdfghjklzxcvbnm'// it is not clear if "y" is vowel or consonant, so i treat it as consonant
let consonants =0;
let vowels =0;
for (let i =0; i < word.length; i++){
    let wordLowerCase = word.toLowerCase();
    if (vowelsLetters.includes(wordLowerCase[i])){
        vowels ++;
    } else if (consonantLetters.includes(wordLowerCase[i])){
            consonants ++;
    }   
}
console.log(`${word} contains ${vowels} vowels and ${consonants} consonants`)

// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
const phrase = "AbC";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";

const offset = -1;
let codedPhrase = [];
for ( let i =0; i<phrase.length; i++){
    let position = alphabet.indexOf(phrase[i]);

let newNum;
    if ((position + offset) < 0){
        newNum = position + offset + alphabet.length;
    } else if ((position + offset) > alphabet.length){
        newNum = position + offset - alphabet.length;
    } else {
        newNum = position + offset;
    }
    
    codedPhrase.push(alphabet[newNum])
}
console.log(codedPhrase.join(""))