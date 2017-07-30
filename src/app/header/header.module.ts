import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CarouselModule as Carousel} from 'ng2-bootstrap'

import { HeaderComponent } from './header.component'
@NgModule({
    imports: [
        CommonModule,
        Carousel.forRoot()
    ],
    declarations: [
        HeaderComponent
    ],
    exports:[
        HeaderComponent
    ]
})

export class HeaderModule{}