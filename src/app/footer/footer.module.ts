import { NgModule } from '@angular/core'
import { RouterModule  } from '@angular/router'
import { CommonModule } from '@angular/common';

import { FooterComponent } from './Footer.component'
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        FooterComponent
    ],
    exports:[
        FooterComponent
    ]
})

export class FooterModule{}