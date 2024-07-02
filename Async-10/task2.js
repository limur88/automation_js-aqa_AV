// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello

async function delay() {
    setTimeout(() => { console.log('hello'); }, 2000);
}
delay();

// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
const promise1 = new Promise((resolve, reject) => {
    resolve(setTimeout(() => { console.log("After 3 seconds") }, 3000));
})

const promise2 = new Promise((resolve, reject) => {
    resolve(setTimeout(() => { console.log("After 5 seconds") }, 5000));
})

//   Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
//     1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
Promise.all([promise1, promise2]).then((result) => console.log(result));
Promise.allSettled([promise1, promise2]).then((success) => console.log(success));
//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди
async function allInOne() {
    try {
        const [promise1Result, promise2Result] = await Promise.all([promise1, promise2]);
        console.log(promise1Result);
        console.log(promise2Result);
    } catch (error) {
        console.log(`error`);
    } finally {
        console.log(`done1`);
    }
}
allInOne();

async function allInSettled() {
    try {
        const [promise1Result, promise2Result] = await Promise.allSettled([promise1, promise2]);
        if (promise1Result.status == 'fulfilled') {
            console.log(promise1Result.value);
        } else {
            console.log(promise1Result.reason);
        }
        if (promise2Result.status == 'fulfilled') {
            console.log(promise2Result.value);
        } else {
            console.log(promise2Result.reason);
        }
    } catch (error) {
        console.log(`error`);
    } finally {
        console.log(`done2`);
    }
}
allInSettled();
// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
async function sumProm(a, b) {
    const sum = new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Wrong data');
        }
    })
    return sum
        .then((number) => console.log(number))
        .catch((error) => console.log(error))
        .finally(() => console.log("ready"));
}
// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)
const url = "https://jsonplaceholder.typicode.com/todos";
const response = fetch(url)
    .then((data) => data.json())
    .then(response => {
        console.log(response.filter((users) => users.userId === 1));
    });

async function getObjectsById(link, id) {
    try {
        const answer = await fetch(link);
        const data = await answer.json();
        console.log(data.filter((users) => users.userId === id));
    }
    catch (error) {
        console.log("Error occured")
    }
}
getObjectsById(url, 1);