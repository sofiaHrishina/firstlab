import { getInfo } from "../interfaces/getInfo";

export class Show_Desktop implements getInfo{
    info: string="";
    show(){
        this.info="Information about organization " ;
        return this.info;
    }
} 