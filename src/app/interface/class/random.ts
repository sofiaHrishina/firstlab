export class Random {
    getRandomInt(max : number,min:number){
        return Math.floor((Math.random()* Math.floor(max)- Math.floor(min))+Math.floor(min));
    }
}