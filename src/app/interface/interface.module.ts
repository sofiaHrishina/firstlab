import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfacePageRoutingModule } from './interface-routing.module';

import { InterfacePage } from './interface.page';
import { MyHeaderComponent } from '../my-header/my-header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfacePageRoutingModule
  ],
  declarations: [InterfacePage, MyHeaderComponent]
})
export class InterfacePageModule {}
