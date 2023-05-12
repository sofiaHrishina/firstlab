import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
  },
  {
    path: 'abstractclasses',
    loadChildren: () => import('./abstractclasses/abstractclasses.module').then( m => m.AbstractclassesPageModule)
  },
  {
    path: 'interface',
    loadChildren: () => import('./interface/interface.module').then( m => m.InterfacePageModule)
  },
  {
    path: 'modulecross',
    loadChildren: () => import('./modulecross/modulecross.module').then( m => m.ModulecrossPageModule)
  },
  {
    path: 'servicepage',
    loadChildren: () => import('./servicepage/servicepage.module').then( m => m.ServicepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
