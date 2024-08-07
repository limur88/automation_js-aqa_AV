// 1. Создайте корзину в интернет магазине! 
//     Создайте объект shoppingCart и его интерфейс!:
//       items (array of products), each product should have:
//         id (number)
//         name (string)
//         price (number)
//         quantity (number)
//     Добавьте методы к этому объекту:

//     addItem(item) - Adds a new item to the cart.
//     removeItem(id) - Removes an item from the cart by its id.
//     getTotalPrice() - Returns the total price of the items in the cart.
//     checkout() - Empties the cart and returns the total price.

//     Пример:
interface Iproduct{
    id: number;
    name: string;
    price: number;
    quantity: number;
}
interface IShoppingCart {
    items:Iproduct [];
    addItem(item:Iproduct):void;
    removeItem(id:number):void;
    getTotalPrice (): number;
    checkout(): void;

}

class ShoppingCart implements IShoppingCart{
    public items: Iproduct[];
    constructor(items: Iproduct[]){
        this.items= items;
    };

addItem(item:Iproduct) {
    this.items.push(item)
}

removeItem(id: number) {
let index: number = this.items.findIndex((item) => item.id === id); 
this.items.splice(index, 1);     
}

getTotalPrice () {
    return this.items.reduce((zero, item)=> zero+ item.price* item.quantity, 0)
}
checkout() {
    this.getTotalPrice();
    this.items = [];
}
}
const cart: IShoppingCart = new ShoppingCart([
{ id: 1, name: "Laptop", price: 1000, quantity: 1 },
{ id: 2, name: "Phone", price: 500, quantity: 2 }]);
console.log(cart);
cart.addItem({ id: 3, name: "Phone", price: 500, quantity: 10 });
console.log(cart);
console.log(cart.getTotalPrice());
cart.checkout();
console.log(cart);