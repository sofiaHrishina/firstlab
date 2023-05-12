import { Organization } from './organization'
import { i_am_Company } from '../interfaces/i_am_company'
import { hasLicense } from '../interfaces/hasLicense';
import { getInfo } from '../interfaces/getInfo';
export class insurance_Company extends Organization implements i_am_Company, hasLicense, getInfo{
    found_year : number;
    staffN : number;
    location : string;
    medicine_license : boolean;
    life_insurance : boolean;
    info : string = " "
    constructor(found_year: number, staffN: number, location: string, name: string, founder: string,medicine_license: boolean, life_insurance: boolean) {
      super(name, founder);
      this.found_year = found_year;
      this.staffN = staffN;
      this.location = location;
      this.medicine_license= medicine_license;
      this.life_insurance =  life_insurance;
    }
    checkLicense(): string {
    return "This company has medicine license : " + this.medicine_license + " This company has life insurance : " + this.life_insurance;
    }
    show(): string {
        return this.name + ", founder is " + this.founder + ", this organization was founded in " + this.found_year + ", our location is "+ this.location;
    }

}