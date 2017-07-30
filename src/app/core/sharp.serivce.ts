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
    private httpHader = "http://"
    private address = "192.168.140.129:3000/";//10.28.83.150:3000/   192.168.30.105:3000/
    public API={
        postApi: this.httpHader + this.address+"get/post",
        getProd: this.httpHader + this.address + "get/product",
        getType: this.httpHader + this.address + "get/type",
        getNews: this.httpHader + this.address + "get/news",
        getWebInfo: this.httpHader + this.address + "get/webInfo",
    }
}