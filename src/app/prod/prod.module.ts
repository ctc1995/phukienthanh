import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetHeightDirective } from './set-height.directive'
import { ProdRoutingModule } from './prod-routing'
import { ProdComponent } from './prod.component'
@NgModule({
  imports: [
    CommonModule,
    ProdRoutingModule
  ],
  declarations: [
    ProdComponent,
    SetHeightDirective
  ],
  entryComponents: [
    ProdComponent
  ]
})
export class ProdModule { }
