import { TcoffeeIngridients, TcoffeeSize } from "./types";

export class Coffee{
    name:string;
    readonly price!: number;
    size: TcoffeeSize;
    hasSugar: boolean;
    additional: TcoffeeIngridients[];


    constructor(name:string, size:TcoffeeSize, hasSugar: boolean, additional: TcoffeeIngridients[]){
        this.name =name;
        this.size = size;
        this.hasSugar = hasSugar;
        this.additional = additional;
        this.price = this.calculatePrice();
    }

    calculatePrice(): number {
        let price = 3;
        if (this.size === 'double'){
            price *= 1.5;
        }
        price += this.additional.length * 0.5;
        return price;
    }
 }