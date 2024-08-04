import { CustomerOrder } from "./customerOrder";
import { Coffee } from "./drinks";
import { Pizza } from "./pizza";
import { Pizzeria } from "./pizzeria";

const myPizzeria = new Pizzeria('My Pizzeria', '123 Pizza St', '9 AM - 11 PM');

const espresso = new Coffee('espresso', 'regural', false, []);
const americano = new Coffee('americano', 'regural', false, []);
const americanomilk = new Coffee('americano', 'regural', false, ['milk']);
const cappuccino = new Coffee('cappuccino', 'regural', false, ['milk', 'cream']);

const margarita = new Pizza('margarita', 'medium', 'thin', ['mozarella', 'marinara'], []);
const pepperoni = new Pizza('Pepperoni', 'big', 'thin', ['mozzarella', 'tomato sauce'], ['salami']);
const annaOrder = new CustomerOrder('Anna');
console.log(annaOrder.addItem(espresso).addItem(cappuccino).addItem(margarita));
myPizzeria.addOrder(annaOrder);
console.log(myPizzeria);
console.log(myPizzeria.getTotalRevenue());