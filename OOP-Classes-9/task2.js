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
    get color(){
        return this._color;
    }
    set color(shade){
        if (shade.toLowerCase() == "red" || shade.toLowerCase() == "black" || shade.toLowerCase() == "white" || shade.toLowerCase() == "blue"){
            this._color = shade.toLowerCase();
        } else {
            throw new Error(`wrong color`);
    }
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
// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
class Bird extends Animal{
    #isFlying
    constructor (type, color, weight, height, placeOfOrigin, isFlying){
        super (type, color, weight, height, placeOfOrigin);
        this.#isFlying = isFlying;
    }
}

//2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
class CatLike extends Animal{
    constructor (type, color, weight, height, placeOfOrigin, isSafeToPet){
        super (type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
}

// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()
class Worker{
    constructor(firstName, lastName, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;    
    }
    getFullName(){
        return(`${this.firstName} ${this.lastName}`);
    }
}

//4. Создайте класс Zoo, реализующий следующий интерфейс:
    // class Zoo
    //   address
    //   title
    //   ticket price
    //   workers: []
    //   animals: [],
class Zoo{
    #animalIdCounter = 1;

    constructor(address, title, ticketPrice){
        this.address = address;
        this.title = title;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    }
 // 5. Добавьте геттеры и сеттеры к полям address, title, ticket price   
 get address(){
        return this._address;
    }
    get title(){
        return this._title;
    }
    get ticketPrice(){
        return this._ticketPrice;
    }
    set address(gpsCoordinates){
        if(typeof gpsCoordinates === 'string' || gpsCoordinates.length ===25){
            return this._address = gpsCoordinates;
        }else{
        throw new Error(`location must be given in GPS Coordinates. This is invalid input: ${gpsCoordinates}`)
        }
    }
    set title(name){
        if((typeof name === 'string') && name.length > 3){
            return this._title = name;
        }else{
        throw new Error(`invalid name : ${name}`)
    }
}
    set ticketPrice(price){
        if(typeof price === 'number' && price > 0){
            return this._ticketPrice = price;
        }else{
        throw new Error(`invalid amount : ${price}`)
        }
    }
    // 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку
    addWorker(worker = {firstName, lastName, phone}){
        if (worker instanceof Worker){
        this.workers.push(worker);
    }else{
        throw new Error(`can not add worker: ${worker}`)
}
    }


// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
animalID(){
    return this.#animalIdCounter;
}

addAnimal(animal){
    if (!(animal instanceof Animal)){
    throw new Error(`can not add animal: ${animal}`)
    } else if ((animal instanceof Snake)){
    throw new Error(`There will be no snakes, mister Potter!`)
    }else {
    animal.id = this.#animalIdCounter;
    this.animals.push(animal);
    this.#animalIdCounter++;
}
} 
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)
removeWorker(phone){
    const indexW = this.workers.findIndex(worker => worker.phone === phone);
    if(indexW !== -1){
    this.workers.splice(indexW, 1)
 }else{
    throw new Error(`Worker with phone number ${phone} not found`)
 }
}  
removeAnimal(id){
       const indexA = this.animals.findIndex(animal => animal.id === id);  
    if (indexA !== -1){
        this.animals.splice(indexA, 1);
    }else{
        throw new Error(`Animal with id ${id} not found`)
    }
   }
}
