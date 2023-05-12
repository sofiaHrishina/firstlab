import { getInfo } from '../interfaces/getInfo';
import { Organization } from './organization'
import { Random} from './random'
export class Factory extends Organization implements getInfo {
    production_costs : number = 0;
    production_volume :number = 0;
    constructor() {
        super('Factory "sweets by grandma of John Doe" ', 'John Doe'); 
      }
      calculateProd(): void {
        let r = new Random();
        let t = r.getRandomInt(100000,1500);
        let t2 = r.getRandomInt(200000,1000);
        this.production_costs= t;
        this.production_volume= t2; 
      }
    
      show(): string {
        return this.name + ", founder is " + this.founder +` Production costs: ${this.production_costs}$, Production volume: ${this.production_volume}$`;
      }
    }

