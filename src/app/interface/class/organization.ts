export abstract class Organization {
    name!:string;
    founder!:string;
    constructor(name:string,founder:string){
        this.name=name;
        this.founder=founder;
    }

}