import   { CountPowers } from './CountPowers'
export class MilitaryUnit implements CountPowers {
  speed :number;
  price : number;
  name : string;
  constructor(names: string){
    this.speed=5;
    this.price=4;
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
