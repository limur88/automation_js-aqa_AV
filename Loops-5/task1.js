// 1. Создайте цикл, который выведет в консоль цифры от 10 до 0

let start = 10;
while ( start >= 0){
    console.log(start);
    start --;
}

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ":)";

for( let j = 0; j<=5; j++){
    console.log(smile.repeat(j))
}

// Для Оксаны и ее друзей: также реализовать циклом while
// Рекоммендация: попробуйте метод .repeat()

let i =1;
while ( i <= 5){
    ;
    console.log(smile.repeat(i));
      i++;
}
// Are we friends with Oksana now?)