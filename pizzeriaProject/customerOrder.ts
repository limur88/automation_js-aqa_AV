import { Coffee } from "./drinks";
import { Pizza } from "./pizza";

export class CustomerOrder{
    customerName: string;
    orderItems: (Coffee | Pizza)[];
    orderId: number;
    totalToPay: number;

    constructor(customerName: string){
        this.customerName = customerName;
        this.orderItems =[];
        this.orderId = Date.now();
        this.totalToPay = 0;
    } 

    addItem(item:Coffee | Pizza ): this {
        this.orderItems.push(item);
        this.updateTotalPrice();
        return this;
    }

    totalPrice(): number{
        return this.orderItems.reduce((start, order) => start += order.calculatePrice(), 0);
        
    }
   
    removeItem(name: string): void {
        let index = this.orderItems.findIndex((item) => item.name === name);
        if(index !== -1){
        this.orderItems.splice(index, 1);
    }}

    private updateTotalPrice(): void{
        this.totalToPay = this.totalPrice();
    } 
}