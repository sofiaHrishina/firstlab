export abstract class Car {
    naz!: string;
    color!: string;
    pl!:number;
    parameter!: number;
    constructor(){

    }
    show(){
        return " Назва : " + this.naz + ", " + "колір : " + this.color + ", витрати пального на 100 км=" + this.pl.toFixed(2)+ 'л';
    }
    abstract S(): any;
}