import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
private xy=new Map();

  constructor(@Optional() private logService: LogService) { }
  getSeries(x: number) {
    let sum: number = 1;
    let term: number = 1;
    let n: number = 1;
  
    do {
      term *= (x * x) / ((2 * n) * (2 * n - 1));
      sum += term;
      n++;
    } while (Math.abs(term) > 1E-12);
  
    return sum;
  }
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn;
    let y = 0.0;
  
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
  
      if (this.logService)
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
  
      x += h;
    }
  
    return this.xy;
  }
}
