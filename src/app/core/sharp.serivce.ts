import { Injectable } from '@angular/core'

import { Subject } from 'Rxjs/Subject'
@Injectable()

export class SharpService{
    isToggle: boolean =  false;
    navToggle: boolean =  true;
    carouselToggle: boolean =  true
    dySb: Subject<any>;
    constructor(){
        this.dySb = new Subject();
    }
    public setHeadStatus(isToggle: boolean, navToggle: boolean, carouselToggle : boolean){
        this.isToggle = isToggle;
        this.navToggle = navToggle;
        this.carouselToggle = carouselToggle;
    }
}