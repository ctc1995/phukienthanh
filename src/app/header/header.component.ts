import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { SharpService } from '../core/sharp.serivce'

@Component({
    selector: "page-header",
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    selected: number;
    enterNumber: number;
    isToggle: boolean =  false;
    navToggle: boolean =  true;
    carouselToggle: boolean =  true;
    navLists: Array<Object>;
    treeLists: Array<Object>;
    //图片轮播速度
    myInterval : number = 1500;
	noWrapSlides : boolean = false;
    //初始值显示第一张
	activeSlideIndex : number=0;
    //轮播图片集合
    slides:Array<any> = ['../../assets/image/phanphoi.png','../../assets/image/top-logo.png'];
    constructor(
        private router: Router,
        private sharpService: SharpService
    ) {
        this.sharpService.dySb.subscribe(v=>{
            this.isToggle = v[0];
            this.navToggle = v[1];
            this.carouselToggle = v[2];
        })
        //导航
        this.navLists = [
            {
                icon: 'icon-iconfontzhuye',
                name: "Trang chủ",
                url:"index"
            },
            {
                icon: 'icon-icon05',
                name: "Tin tức",
                url:"news"
            },
            {
                icon: 'icon-zhinan',
                name: "Hướng dẫn mua hàng",
                url:"guide"
            },
            {
                icon: 'icon-lianxi1',
                name: "Liên hệ",
                url:"contact"
            },
        ]
        this.treeLists =  [
            {
                id: 1,
                text: "Favorites",
                descr: "computer-icons favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop", descr: "computer-icons empty-doc" },
                    { id: 12, pid: 1, text: "Downloads", descr: "computer-icons downloads" }
                ]
            },
            {
                id: 3,
                text: "Computer",
                descr: "computer-icons pc",
                expanded: false,
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", descr: "computer-icons disk" },
                    { id: 32, pid: 3, text: "Storage (D:)", descr: "computer-icons disk" }
                ]
            },
            { id: 4, text: "Network", descr: "computer-icons network" },
            { id: 5, text: "Recycle Bin", descr: "computer-icons recycle" },
            {
                id: 2,
                text: "Favorites",
                descr: "computer-icons favorites",
                items: [
                    { id: 11, pid: 2, text: "Desktop", descr: "computer-icons empty-doc" },
                    { id: 12, pid: 2, text: "Downloads", descr: "computer-icons downloads" }
                ]
            },
            {
                id: 6,
                text: "Favorites",
                descr: "computer-icons favorites",
                items: [
                    { id: 11, pid: 6, text: "Desktop", descr: "computer-icons empty-doc" },
                    { id: 12, pid: 6, text: "Downloads", descr: "computer-icons downloads" }
                ]
            },
            {
                id: 7,
                text: "Favorites",
                descr: "computer-icons favorites",
                items: [
                    { id: 11, pid: 7, text: "Desktop", descr: "computer-icons empty-doc" },
                    { id: 12, pid: 7, text: "Downloads", descr: "computer-icons downloads" }
                ]
            },
            {
                id: 8,
                text: "Favorites",
                descr: "computer-icons favorites",
                items: [
                    { id: 11, pid: 8, text: "Desktop", descr: "computer-icons empty-doc" },
                    { id: 12, pid: 8, text: "Downloads", descr: "computer-icons downloads" }
                ]
            },
        ];
    }
    onIndex(){
        this.sharpService.dySb.next([false,true,true])
        this.router.navigate(['/index'])
    }
    onSelect(name: String){
        this.sharpService.dySb.next([true,false,false])
        this.router.navigate(['/type/'+name]);
    }
    checkStatus(index: number, url: string) {
        this.selected = index;
        if(this.selected == 0){
            this.sharpService.dySb.next([false,true,true])
        }else{
            this.sharpService.dySb.next([true,false,false])
        }
        if(url=="contact"){
            this.router.navigate(['/'+url+'/contact'])
        }else{
            this.router.navigate(['/'+url])
        }
    }
    navtoggle(toogle:boolean){
        if(this.isToggle){
            this.navToggle = toogle;
        }
    }
    navExpand(i){
        if(this.treeLists[i].hasOwnProperty('items')){
            this.enterNumber = this.treeLists[i]['items'][0]['pid']
        }
    }
    navCollapse(){
        this.enterNumber = null;
    }
}