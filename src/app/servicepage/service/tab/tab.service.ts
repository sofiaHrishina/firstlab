import { LogService } from '../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
private xy= new Map();
  constructor(@Optional() private logService: LogService) { }
  getTab(xn:number=0.1, xk:number=3.14,h:number=0.1):Map<number,number>
  {
    let x = xn,y=0.0;
    while(x<=xk){
      y=(Math.exp(x) + Math.exp(-x)) / 2;
      this.xy.set(x,y);
      if(this.logService)
       this.logService.write("x="+x.toFixed(2)+" y="+y.toFixed(4));
      x=x+h;
    }
    return this.xy;

  }
}
