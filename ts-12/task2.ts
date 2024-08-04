// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]
type MapCallback<T, U> = (value:T, index: number, arr: T[])=> U;
function my_map<T, U> (array: T[], callback: MapCallback<T, U>): U[] {
    const mapped =[];
    for (let i = 0; i< array.length; i++){
        mapped.push(callback(array[i], i, array));
    }
    return mapped;
}

console.log(my_map([1,2,3,4,5], (index, value) => index * value));
console.log(my_map([1,2,3,4,5], (index) => index));

// 2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T] 
//   и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте. 
//   В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

//   Требования:
//     - Функция должна быть дженерик и работать с любыми типами значений.
//     - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.

//   Пример:
  const result = generateObject([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
]);

console.log(result); //{ '1': 1, '2': 2, '3': 3, '4': 5 }

function generateObject<T>(array:[string, T][]): {[key: string]: T}{
    let obj: {[key: string]: T} = {};
    for(const [key, value] of array){
        obj[key] = value;
        
    }
    return obj;
}
