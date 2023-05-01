import { Component, OnInit } from '@angular/core';
import { insurance_Company } from './class/insurance_company';
import { oil_gaz_Company } from './class/oil_gaz_company';
import { Factory } from './class/factory'
@Component({
  selector: 'app-interface',
  templateUrl: './interface.page.html',
  styleUrls: ['./interface.page.scss'],
})
export class InterfacePage implements OnInit {
  result1: string = "";
  result2: string = "";
  result3: string = "";
  lisenceInf1 : string = "";
  lisenceInf2 : string = "";
  constructor() { }

  ngOnInit() {
  }
ras(){
  let company1 = new insurance_Company(2002,70,"123 Main Street, Anytown, California ","SecureLink insurance company","Bill Evans",true,true);
  this.result1 = company1.show();
  this.lisenceInf1 = company1.checkLicense();
  let company2 = new oil_gaz_Company(1998,1278,"890 Pine Street, Riverdale, Georgia","BlackRock Oil & Gas","Christian Nerlon", false, true);
  this.result2 = company2.show();
  this.lisenceInf2 = company2.checkLicense();
  let factory = new Factory();
  factory.calculateProd();
  this.result3 = factory.show();

}
}
