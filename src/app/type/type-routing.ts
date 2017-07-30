import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypeComponent }  from './type.component'
const Routes: Routes = [
    {
        path:'',
        component:TypeComponent
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
export class TypeRoutingModule {}