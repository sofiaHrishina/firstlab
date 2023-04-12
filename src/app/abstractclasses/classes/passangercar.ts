import { Car } from "./car";
export class Passangercar extends Car {
    constructor(override naz: string, override color:string, public parametr:number){
        super();
    }

    S(){
       
       
        this.pl= this.parametr * 2.5;
    }

}