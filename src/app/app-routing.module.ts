import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './digimons/list/list.component';
import { NoFound404Component } from './no-found404/no-found404.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./digimons/digimons.module').then(m => m.DigimonsModule)
  },
  { path: 'not-found', component: NoFound404Component },
  { path: '**', component: NoFound404Component } //, component: Notfound404Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
