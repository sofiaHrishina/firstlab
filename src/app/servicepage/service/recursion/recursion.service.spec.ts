import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Сума ряду значення х=0.1 у=1.0050', ()=> {
    let x=0.1;
    let y=1.0050;
    let y1= 1;
    y1 = service.getRecursion(x,1);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });


});
