import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GuideComponent } from './guide.component'

const routers: Routes=[
    {
        path: '',
        component: GuideComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routers)
    ],
    exports:[
        RouterModule
    ]
})

export class GuideRoutingModule{}