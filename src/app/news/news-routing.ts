import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component'
const Routes: Routes = [
    {
        path:'',
        component:NewsComponent
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
export class NewsRoutingModule {}