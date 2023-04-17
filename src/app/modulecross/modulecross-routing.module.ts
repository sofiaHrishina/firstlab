import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulecrossPage } from './modulecross.page';

const routes: Routes = [
  {
    path: '',
    component: ModulecrossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulecrossPageRoutingModule {}
