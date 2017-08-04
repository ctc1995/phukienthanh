import { Component, OnInit } from '@angular/core'

import { GetHttp } from '../core/getHttp.service'
import { SharpService } from '../core/sharp.serivce'
@Component({
    selector: "page-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit{
    linkLists: Array<any> = [];
    numberLists: Array<object> = [];
    address:string;
    constructor(
        private getHttp: GetHttp,
        private sharpService: SharpService
    ) {
        this.linkLists = [
            {
                "title": "Giới thiệu",
                "href": "/intro"
            },
            {
                "title": "Chính sách bảo mật",
                "href": "/privacy"
            },
            {
                "title": "Liên hệ",
                "href": "contact"
            },
            {
                "title": "Điều khoản dịch vụ",
                "href": "/service"
            },
            {
                "title": "Hướng dẫn sử dụng",
                "href": "/build"
            },
            {
                "title": "Câu hỏi thường gặp",
                "href": "/build"
            },
            {
                "title": "Hướng dẫn thanh toán",
                "href": "/build"
            },
            {
                "title": "Chính sách hoàn trả",
                "href": "/return"
            }
        ]
    }
    ngOnInit(){
        this.getWebInfo();
    }
    getWebInfo(){
        this.getHttp.getData(null, this.sharpService.API.getWebInfo).subscribe(
            res=>{
                this.numberLists = res[0].phone;
                this.address = res[0].address;
            }
        )
    }
}