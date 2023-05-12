import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private xy = new Map<number, number>();

  constructor(@Optional() private logService: LogService) {}

  getRecursion(x: number, n: number): number {
    if (n === 0) {
      return 1;
    }

    const term = Math.pow(x, 2 * n) / this.factorial(2 * n);
    const sum = this.getRecursion(x, n - 1) + term;

    return sum;
  }

  factorial(num: number): number {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1): Map<number, number> {
    let x = xn;

    while (x <= xk) {
      const y = this.getRecursion(x, 10);
      this.xy.set(x, y);

      if (this.logService) {
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      }

      x += h;
    }

    return this.xy;
  }
}