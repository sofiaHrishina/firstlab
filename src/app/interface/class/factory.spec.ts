import { Factory } from './factory'
describe('Factory testing', () => {
    let factory: Factory;
  
    beforeEach(() => {
      factory = new Factory();
    });
  
    it('Create an object of the class', () => {
      expect(factory).toBeTruthy();
    });
  
    it('Test calculateProd method', () => {
        factory.calculateProd();
        expect(factory.production_costs).toBeGreaterThan(1500);
        expect(factory.production_costs).toBeLessThan(100000);
        expect(factory.production_volume).toBeGreaterThan(1000);
        expect(factory.production_volume).toBeLessThan(200000);
    });
  
   
  
   it('Test show method', () => {
    factory.calculateProd();
    const expectedStringRegex = /Factory "(.+)" , founder is (.+) Production costs: (\d+\$), Production volume: (\d+\$)/;
    const actualString = factory.show();
    expect(actualString).toMatch(expectedStringRegex);
  });
  
  }); 