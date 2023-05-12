import { Component, OnInit } from '@angular/core';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  constructor(private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService) { }
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = value; // Використовуємо значення value замість y
      s = y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      s = s + " " + y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    });
  }

  ras(xn:any,xk:any,h:any){
    let xn1 = parseFloat(xn),
  xk1= parseFloat(xk),
  h1 = parseFloat(h);
  console.log('Табулювання');
  this.xyTab = this.tabService.getTab(xn1,xk1,h1);
  console.log("Ряд");
  this.xySeries = this.seriesService.getTab(xn1,xk1,h1);
  console.log("Recursion");
  this.xyRecursion = this.recursionService.getTab(xn1,xk1,h1);
  this.input();
  }
  ngOnInit() {
  }

}
