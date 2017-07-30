import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing'
import { ManagerComponent } from './manager.component'
@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule
  ],
  declarations: [
    ManagerComponent
  ],
  entryComponents:[
    ManagerComponent
  ]
})
export class ManagerModule { }
