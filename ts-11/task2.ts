// task 2.1 is in the task1.ts file
// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 
function countTypes(arrayOrObject: { [key: string]: string | number | boolean } |{ [key: string]: string | number | boolean }[]):{ [key: string]: number } {
    let counted: {[key: string]: number} = {
        string: 0,
        number: 0,
        boolean: 0,
    };

    const forObject = (object: {[key:string]: string | number | boolean }) =>{
        Object.values(object).forEach((value) => {
            if (typeof value === "string") {
                counted.string++
            } else if (typeof value === "number") {
                counted.number++
            } else if (typeof value === "boolean") {
                counted.boolean++
            }
        })
    };
    if (Array.isArray(arrayOrObject)){
        arrayOrObject.forEach((item) => forObject(item))
    }else {
        forObject(arrayOrObject);
    }
    return counted;
}
const obj1 = { a: "hello", b: 42, c: true };
const obj2 = { d: "world", e: 10, f: false };
const arrayOfObjects = [obj1, obj2];

console.log(countTypes(obj1)); 
console.log(countTypes(arrayOfObjects)); 

// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк),
//     который будет использоваться для проверки каждого числа на соответствие требованиям.
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
//     Пример функции:

function filterArray(numbers: number[], fn: (n: number) => boolean) {
    return numbers.filter(fn)
}

const numbers = [1, -5, 2, 3, 4, 133];

console.log(filterArray(numbers, n => n > 2));

// Type alias for the predicate function
type Predicate = (n: number) => boolean;

// Type alias for the filter function
type FilterFunction = (array: number[], predicate: Predicate) => number[];

const filter: FilterFunction = (array, predicate) => {
    return array.filter(predicate);
};
