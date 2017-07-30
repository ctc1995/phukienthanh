import { NgModule } from '@angular/core'
import { CommonModule }  from '@angular/common'

import { GuideRoutingModule } from './guide-routing'
import { GuideComponent } from './guide.component'
@NgModule({
    imports:[
        CommonModule,
        GuideRoutingModule
    ],
    declarations:[
        GuideComponent
    ],
    entryComponents:[
        GuideComponent
    ]
})

export class GuideModule{}