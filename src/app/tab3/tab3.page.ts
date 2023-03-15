import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  a: number[][] = [];
  n: number = 0;
  columnProducts: number[];
  colors: string[];
  
  constructor() {
   
    this.columnProducts = [];
    this.colors = [];
    this.colors = Array(this.n).fill('pink');
  }
  
  arrays(n: any) {
    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true) {
        throw new Error('Parameter is not a number');
      }
      if (n <= 0) {
        throw new Error('Parameter is less than zero');
      }
      this.colors = [];
      for (let i = 0; i < this.n; i++) {
        this.colors.push('pink');
      }
      let i: number = 0, j: number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      for (i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
        let product = 1;
        for (j = 0; j < this.n; j++) {
          this.a[i][j] = Math.floor(Math.random() * 10) + 1;
          product *= this.a[i][j];
        }
      }
      for (let j = 0; j < this.n; j++) {
        let product = 1;
        for (let i = 0; i < this.n; i++) {
          product *= this.a[i][j];
        }
        console.log(` Product of column ${j}: ${product}  `);
        this.columnProducts.push(product);
      }
    } catch (error) {
      console.log(error);
    }
  }
}





