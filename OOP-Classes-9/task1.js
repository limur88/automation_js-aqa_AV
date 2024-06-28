// Task 1

// 1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:     
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')
// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
// 10. Сделайте поле isPoisonous приватным в классе Snake

class Animal{
    constructor (type, color, weight, height, placeOfOrigin){
        this.type = type; 
        this.color = color; 
        this.weight = weight;
        this.height =height;
        this.placeOfOrigin = placeOfOrigin;
    }
    getInfo(){
        console.log(`The Animal is ${this.type}, ${this.color} color, ${this.height} high and weights ${this.weight} kg. The Animal is from ${this.placeOfOrigin} `)
    }
    getColor(){
        return this._color;
    }
    setColor(shade){
        if (shade.toLowerCase() === "red" || shade.toLowerCase() === "black" || shade.toLowerCase() === "white" || shade.toLowerCase() === "blue"){
            this._color = shade.toLowerCase();
        } throw new Error(`wrong color`);
    }
}

class Snake extends Animal{
    #isPoisonous;
    constructor (type, color, weight, height, placeOfOrigin, isPoisonous){
        super (type, color, weight, height, placeOfOrigin);
        this.#isPoisonous = isPoisonous;
}
checkPoisonous(){
    return this.#isPoisonous;
}
}


