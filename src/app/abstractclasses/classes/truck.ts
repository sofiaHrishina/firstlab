import { Car } from "./car";
export class Truck extends Car {
    constructor(override naz: string, override color:string, public parametr:number){
        super();
    }

    S(){
       
       
        this.pl= this.parametr * 10 + Math.floor(Math.random() * 9);
    }

}