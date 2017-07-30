import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing'
import { TypeComponent } from './type.component'
@NgModule({
  imports: [
    CommonModule,
    TypeRoutingModule
  ],
  declarations: [
    TypeComponent
  ],
  entryComponents:[
    TypeComponent
  ]
})
export class TypeModule { }
