import { getInfo } from "../interfaces/getInfo";

export class Show_Desktop implements getInfo{
    info: string="";
    show(s: string){
        this.info="Information about organization " + s;
    }
} 