import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MyHeaderComponent } from "./my-header.component";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
@NgModule({
    declarations: [
       MyHeaderComponent,
    ],
    imports: [CommonModule, IonicModule],
    exports: [
        MyHeaderComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MyHeaderModule {}