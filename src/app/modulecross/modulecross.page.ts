import { Component, OnInit } from '@angular/core';
import { Catapults } from './classes/Catapults';
import { Cavarly } from './classes/Cavarly';
import { MilitaryUnit } from './classes/MilitaryUnit';
@Component({
  selector: 'app-modulecross',
  templateUrl: './modulecross.page.html',
  styleUrls: ['./modulecross.page.scss'],
})
export class ModulecrossPage implements OnInit {
  militaryU: Catapults[] = [];
  militaryU2: Cavarly[] = [];
  militaryU3: MilitaryUnit[] = [];
  totalPrice: number = 0;
  totalSpeed: number = 0;

  create_army(n1: any, days: any, n2: any, n3: any) {
    this.militaryU = new Array();
    this.militaryU2 = new Array();
    this.militaryU3 = new Array();
    let nn1 = parseInt(n1);
    let nn2 = parseInt(n2);
    let nn3 = parseInt(n3);

    for (let i = 0; i < nn1; i++) {
      this.militaryU.push(new Catapults("Катапульта"));
    }

    for (let i = 0; i < nn2; i++) {
      this.militaryU2.push(new Cavarly("Конниця"));
    }

    for (let i = 0; i < nn3; i++) {
      this.militaryU3.push(new MilitaryUnit("Мобілізоване ополчення"));
    }
  }
  countTotalPrice(days: any) {
    let d = parseInt(days);
    this.totalPrice = 0;
    this.totalPrice += this.militaryU.reduce((total, unit) => total + unit.countprice(d), 0);
    this.totalPrice += this.militaryU2.reduce((total, unit) => total + unit.countprice(d), 0);
    this.totalPrice += this.militaryU3.reduce((total, unit) => total + unit.countprice(d), 0);
  }
  countTotalSpeed() {
    this.totalSpeed = 0;
    const militaryUnits = [...this.militaryU, ...this.militaryU2, ...this.militaryU3];
    const speeds = militaryUnits.map(unit => unit.speed);
    this.totalSpeed = Math.min(...speeds);
  }
  Results(a: any, b: any, c: any, d: any) {
    this.create_army(a, b, c, d);
    this.countTotalPrice(b);
    this.countTotalSpeed();
  }
  
  ngOnInit() {}
}