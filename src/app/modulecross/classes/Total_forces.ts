import { Catapults } from './Catapults'


 export class Total_forces {
  militaryU : Catapults[] = [];

  summ: number = 0;
  summ2: number = 0;
  create_army(n1 : any,n2 : any,n3 : any,n4: any){
    this.militaryU = new Array();
    let nn1 = parseInt(n1);
   // let nn2 = parseInt(n2);
  //  let nn3 = parseInt(n3);
  //  let nn4 = parseInt(n4);
    for (let i=0; i<nn1; i++){
      this.militaryU.push(new Catapults("Катапульти"));
    }
   
  }
 countTotalPrice(days: number): number {
    let totalPrice = 0;
    this.militaryU.forEach((unit) => {
      totalPrice += unit.countprice(days);
    });
    console.log(totalPrice);
    return totalPrice;
  }

}
