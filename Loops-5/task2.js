//1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb
//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

let size = Math.round(Math.random() * (1024**4 - 1024 + 1) + 1024).toFixed(2);
let i = 1;
while (i<=4 && size> 1024){
    size = size / 1024;
    i++
    }
        switch (i){
        case 1:
            console.log(size.toFixed(1) + "KB");
            break;
        case 2:
            console.log(size.toFixed(1) + "Mb");
            break;
        case 3:
            console.log(size.toFixed(1) + "Gb");
            break;
        case 4:
            console.log(size.toFixed(1) + "TB");
            break;
        default:
            console.log (`Ivalid integer`)
            break        
            }
    
// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб

let base = Math.floor(Math.random() * (20 - 3) + 3);//generate number from 3 to 20
console.log(base);
const empty = " ";
const star = "*";
for (let i = (base/2); i>=1 ; i-- ){
    let starss = 1  + (base - 2 * i);
       let triangle = empty.repeat(i) + star.repeat(starss) + empty.repeat(i);
      console.log(triangle);  
    }
// for diamond shape i need only even numbers
if (base%2){
    base +=1;
}
console.log(base);
for (let i = (base/2); i>= (-base/2) ; i-- ){
    if (i >= 0){
        let starss = 1  + (base - 2 * i);
        let romb = empty.repeat(i) + star.repeat(starss) + empty.repeat(i);
          console.log(romb);
    } else {
        let starss = (base + (2 * i) +1);
        let romb = empty.repeat(-i) + star.repeat(starss) + empty.repeat(-i); 
        console.log(romb);
    } 
    }


// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

for (i = 1; i<= 15; i ++){
    if(i%15 == 0){
        console.log (`${i} делится и на 3, и на 5`)
    } else if (i%3 ==0){
        console.log (`${i} делится на 3`)

    }else if (i%5 == 0){
        console.log (`${i} делится на 5`)

    }else{
        console.log (`${i}  HE делится на 3 u 5`)
    }
}

// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

const sentence = "I am SUPER engineer";
const words = sentence.toLowerCase().split(" ");
for (let i =1; i< words.length ; i++){
   words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length).toLowerCase();
}
const camelCase = words.join("");
console.log(camelCase)