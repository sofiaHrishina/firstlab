import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulecrossPageRoutingModule } from './modulecross-routing.module';

import { ModulecrossPage } from './modulecross.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulecrossPageRoutingModule
  ],
  declarations: [ModulecrossPage]
})
export class ModulecrossPageModule {}
