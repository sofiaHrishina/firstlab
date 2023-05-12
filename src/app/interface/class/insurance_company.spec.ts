import { insurance_Company } from './insurance_company';
describe('insurance_Company testing', () => {
    let company: insurance_Company;
  
    beforeEach(() => {
      company = new insurance_Company(2020, 100, 'New York', 'Company XYZ', 'John Doe', true, false);
    });
  
    it('Create object of a class', () => {
      expect(company).toBeTruthy();
    });
  
    it('Test method checkLicense()', () => {
      const result = company.checkLicense();
      expect(result).toContain('This company has medicine license : true');
      expect(result).toContain('This company has life insurance : false');
    });
  
    it('Test method show()', () => {
      const result = company.show();
      expect(result).toContain('Company XYZ');
      expect(result).toContain('John Doe');
      expect(result).toContain('2020');
      expect(result).toContain('New York');
    });
  });