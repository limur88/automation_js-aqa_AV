type TdoughType = "thin" | "GF" | "cauliflower";
type TpizzaIngridients = 'cheese' | 'salami' | 'corn' | 'mushrooms'| 'chili' | 'garlic';
type TcoffeeIngridients = 'milk' | 'cream' | 'honey' | 'spice';
type TcoffeeSize = 'regural' | 'double';

interface Iorder{
    price: number;
    id: number;
};

class Pizzeria{
    name: string;
    address: string;
    orders: Iorder[];
    workHours: string;
    orderIdCounter = 1;;

    constructor(name: string, address: string, orders: Iorder[], workHours: string){
        this.name =name;
        this.address = address;
        this.orders = [];
        this.workHours = workHours;
    };
 
    addOrder(order: Iorder): this{
        order.id = this.orderIdCounter++;
        this.orders.push(order);
        return this;
    }

    removeOrder(id: number): void{
        let index = this.orders.findIndex((order) => order.id === id);
        if(index !== -1){
        this.orders.splice(index, 1);
    }
}

    getTotalRevenue(): number{
        return this.orders.reduce((start, order) => start + order.price, 0);
    }
}


class CustomerOrder{
    customerName: string;
    orderItems: (Coffee | Pizza)[];
    orderId: number;

    constructor(customerName: string){
        this.customerName = customerName;
        this.orderItems =[];
        this.orderId = 1;
    } 

    addItem(item:Coffee | Pizza ): this {
        this.orderItems.push(item);
        return this;
    }

    totalPrice(): number{
        return this.orderItems.reduce((start, order) => start + order.price, 0);
        
    }
   
    removeItem(name: string): void {
        let index = this.orderItems.findIndex((item) => item.name = name);
        if(index !== -1){
        this.orderItems.splice(index, 1);
    } 
}}

abstract class Meal{
    name: string;
    price: number;
    constructor(name: string, price:number){
        this.name = name;
        this.price = price;
    }
    abstract calculatePrice(): number;

}

class Coffee extends Meal{
    size: TcoffeeSize;
    hasSugar: boolean;
    additional: TcoffeeIngridients[];

    constructor(name:string, price:number, size:TcoffeeSize, hasSugar: boolean, additional: TcoffeeIngridients[]){
        super(name, price);
        this.size = size;
        this.hasSugar = hasSugar;
        this.additional = additional;
    }

    calculatePrice(): number {
        let coffeePrice = this.price;
        if (this.size === 'double'){
            coffeePrice *= 1.5;
        }
        coffeePrice += this.additional.length * 0.5;
        return coffeePrice;
    }
 }
    
type TpizzaSize = 'small' | 'medium' | 'big';
class Pizza extends Meal{
    size: TpizzaSize;
    doughType: TdoughType;
    mainIngridients: string[];
    toppings: TpizzaIngridients[]

    constructor(name:string, price:number, size: TpizzaSize, doughType: TdoughType, mainIngridients: string[], toppings: TpizzaIngridients[]){
        super(name, price);
        this.size = size;
        this.mainIngridients =mainIngridients;
        this.toppings = toppings;
        this.doughType= doughType;

    }
    calculatePrice(): number {
    let totalPrice = this.price + this.toppings.length;
    if(this.size === 'medium'){
        return totalPrice *1.5;
    }else if(this.size === 'big'){
        return totalPrice *2;
    }else{
        return totalPrice;
    }
    
}}


class Menu{
    pizzas: Pizza[];
    drinks: Coffee[];

    constructor( pizzas: Pizza[], drinks: Coffee[]){
        this.pizzas = pizzas;
        this.drinks = drinks;
    }

    addPizza(item :Pizza): this{
        this.pizzas.push(item);
        return this;
    }

addCoffee(drink :Coffee): this{
        this.drinks.push(drink);
        return this;
    }
    removePizza(name: string): void {
        let index = this.pizzas.findIndex((pizza) => pizza.name = name);
        if (index !==-1){
        this.pizzas.splice(index, 1);
    }
}
    removeDrink(name: string): void {
        let index = this.drinks.findIndex((drink) => drink.name = name);
        if (index !==-1){
        this.drinks.splice(index, 1);
    }
}

}

const espresso = new Coffee('espresso', 3, 'regural', false, []);
const americano = new Coffee('americano', 4, 'regural', false, []);
const americanomilk = new Coffee('americano', 4, 'regural', false, ['milk']);
const cappuccino = new Coffee('cappuccino', 6, 'regural', false, ['milk', 'cream']);

const margarita = new Pizza('margarita', 8, 'medium', 'thin', ['mozarella', 'marinara'], []);

const annaOrder = new CustomerOrder('Anna');
console.log(annaOrder.addItem(espresso).addItem(espresso).addItem(margarita));