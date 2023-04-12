import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstractclassesPage } from './abstractclasses.page';

const routes: Routes = [
  {
    path: '',
    component: AbstractclassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstractclassesPageRoutingModule {}
