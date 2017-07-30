import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent }  from './manager.component'

const Routes: Routes = [
  { path: '', component: ManagerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ManagerRoutingModule {}