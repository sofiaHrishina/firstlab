import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractclassesPageRoutingModule } from './abstractclasses-routing.module';

import { AbstractclassesPage } from './abstractclasses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractclassesPageRoutingModule
  ],
  declarations: [AbstractclassesPage]
})
export class AbstractclassesPageModule {}
