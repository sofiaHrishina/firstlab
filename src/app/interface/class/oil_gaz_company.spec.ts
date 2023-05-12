import { oil_gaz_Company } from './oil_gaz_company';
describe('Oil and gas company testing', () => {
    let company: oil_gaz_Company;
    beforeEach(() => {
    company = new oil_gaz_Company(2005, 1500, 'Kyiv', 'Ukrnafta', 'Ivan Ivanov', true, true);
    })
    it("Create object of a class", () => {
    expect(company).toBeTruthy();
    })
    it("Test checkLicense() method", () => {
    const result = company.checkLicense();
    expect(result).toContain("This company has license to sell natural gas : true");
    expect(result).toContain("This company has right to trasport oil : true");
    })
    it("Test show() method", () => {
    const result = company.show();
    expect(result).toContain("Ukrnafta, founder is Ivan Ivanov, this organization was founded in 2005, our location is Kyiv");
    })
    })