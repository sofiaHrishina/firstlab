import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Табулювання значення х=0.1 у=1.0050',()=> {
    let x =0.1;
    let y=1.0050;
    let xy = service.getTab();
    let y1: number | undefined = 5;
    y1 = xy.get(x);
    if(y1 !== undefined){
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });

  
});
