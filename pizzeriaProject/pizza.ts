import { TpizzaSize, TdoughType, TpizzaIngridients } from "./types";

    export class Pizza{
    name:string;
    readonly price: number;
    size: TpizzaSize;
    doughType: TdoughType;
    mainIngridients: string[];
    toppings: TpizzaIngridients[]

    constructor(name:string, size: TpizzaSize, doughType: TdoughType, mainIngridients: string[], toppings: TpizzaIngridients[]){
        this.name =name;
        this.size = size;
        this.mainIngridients =mainIngridients;
        this.toppings = toppings;
        this.doughType= doughType;
        this.price = this.calculatePrice();

    }
    calculatePrice(): number {
    const price = 5;
    let totalPrice = price + this.toppings.length;
    if(this.size === 'medium'){
        return totalPrice *1.5;
    }else if(this.size === 'big'){
        return totalPrice *2;
    }else{
        return totalPrice;
    }
    
}}
