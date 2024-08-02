import { CustomerOrder } from "./customerOrder";

export class Pizzeria{
    name: string;
    address: string;
    orders: {[key:string]: number}[];
    //orders: Partial <CustomerOrder>[];
    workHours: string;

    constructor(name: string, address: string, workHours: string){
        this.name =name;
        this.address = address;
        this.orders =[];
        this.workHours = workHours;
    };
 
    addOrder(order: CustomerOrder): this{
        const newOrder = {
            id : order.orderId,
            price: order.totalPrice(),
            }
        this.orders.push(newOrder);
        return this;
    }

    removeOrder(id: number): void{
        let index = this.orders.findIndex((order) => order.orderId === id);
        if(index !== -1){
        this.orders.splice(index, 1);
    }
}

    getTotalRevenue(): number{
        return this.orders.reduce((start, order) => start + order.price, 0);
    }
}