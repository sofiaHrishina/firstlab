import { Component, OnInit } from '@angular/core';
import { Car } from './classes/car';
import { Passangercar } from './classes/passangercar';
import { Truck } from './classes/truck';


@Component({
  selector: 'app-abstractclasses',
  templateUrl: './abstractclasses.page.html',
  styleUrls: ['./abstractclasses.page.scss'],
})
export class AbstractclassesPage implements OnInit {
  figure : Car[] = [];
  sum: number =0;
  
    constructor() { }
   
  ras(nn:any){
    this.figure = new Array();
    let n = parseInt(nn);
    for (let i=0; i<n; i++){
      this.figure.push(new Passangercar("легковий автомобіль", 'червоний',Math.floor(Math.random() * (4 - 2 + 1) + 2)));
      this.figure.push(new Truck ("вантажівка", 'біла',Math.floor(Math.random() * (4 - 3 + 1) + 3)));
    }
    this.sum =0;
    this.figure.forEach((element) => {
      element.S();
     this.sum += element.pl;
    
    });
    console.log(this.sum);
  }
  
  ngOnInit() {
  }

}
