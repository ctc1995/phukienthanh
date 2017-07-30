import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdComponent } from './prod.component'
const Routes: Routes = [
    {
        path:'',
        component:ProdComponent
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProdRoutingModule {}