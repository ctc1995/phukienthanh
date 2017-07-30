import { NgModule } from '@angular/core'
import { CommonModule }  from '@angular/common'

import { ContactRoutingModule } from './contact-routing'
import { ContactComponent } from './contact.component'
@NgModule({
    imports:[
        CommonModule,
        ContactRoutingModule
    ],
    declarations:[
        ContactComponent
    ],
    entryComponents:[
        ContactComponent
    ]
})

export class ContactModule{}