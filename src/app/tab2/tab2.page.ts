import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a: number =0;
  b: number =0;
  c: number =0;
  calculate(a: any, b: any): void {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.c = 1;
    for (let i = this.a; i <= this.b; i++) {
      if (i % 8 == 0 && i % 2 == 0) {
        this.c *= i;
      }
    }
  }
}
