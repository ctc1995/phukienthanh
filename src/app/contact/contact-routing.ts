import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component'
const Routes: Routes = [
    {
        path:'',
        component:ContactComponent
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
export class ContactRoutingModule {}