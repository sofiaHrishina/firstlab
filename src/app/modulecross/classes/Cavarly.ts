import   { CountPowers } from './CountPowers'
export class Cavarly implements CountPowers {
  speed :number;
  price : number;
  name : string;
  constructor(names: string){
    this.speed=15;
    this.price=10;
    this.name = names;

}
sum1 : number = 0 ;
countprice(days:number){
this.sum1 = days * this.price;
return this.sum1;
}

printInfo() {
    return { name: this.name, speed: this.speed, price: this.price };
  }

}
