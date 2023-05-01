import { Organization } from './organization'
import { i_am_Company } from '../interfaces/i_am_company'
import { hasLicense } from '../interfaces/hasLicense';
import { getInfo } from '../interfaces/getInfo';
export class oil_gaz_Company extends Organization implements i_am_Company, hasLicense, getInfo{
    found_year : number;
    staffN : number;
    location : string;
    right_sell_naturalGas : boolean;
    right_transport_Oil : boolean;
    constructor(found_year: number, staffN: number, location: string, name: string, founder: string,right_sell_naturalGas: boolean,right_transport_Oil: boolean ) {
      super(name, founder);
      this.found_year = found_year;
      this.staffN = staffN;
      this.location = location;
      this.right_sell_naturalGas= right_sell_naturalGas;
      this.right_transport_Oil = right_transport_Oil;
    }
    checkLicense(): string {
      return "This company has license to sell natural gas : " + this.right_sell_naturalGas + " This company has right to trasport oil : " + this.right_transport_Oil;
      }
      show(): string {
          return this.name + ", founder is " + this.founder + ", this organization was founded in " + this.found_year + ", our location is "+ this.location;
      }
}