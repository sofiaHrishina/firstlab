import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfacePageRoutingModule } from './interface-routing.module';

import { InterfacePage } from './interface.page';
//import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyHeaderModule } from '../my-header/my-header.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfacePageRoutingModule,
    MyHeaderModule
  ],
  declarations: [InterfacePage , //MyHeaderComponent],
],
  exports: [InterfacePage]

})
export class InterfacePageModule {}
