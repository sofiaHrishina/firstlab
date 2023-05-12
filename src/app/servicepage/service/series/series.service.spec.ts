import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  fit('Сума ряду значення х=0.1 у=1.0050', ()=> {
    let x=0.1;
    let y=1.0050;
    let y1= service.getSeries(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });


});
