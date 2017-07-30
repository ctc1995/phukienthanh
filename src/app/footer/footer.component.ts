import { Component } from '@angular/core'

@Component({
    selector: "page-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    linkLists: Array<any> = [];
    numberLists: Array<object> = [];
    address:Array<object> = [];
    constructor() {
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
        this.numberLists=[
            {
                name:'Mr. Việt',
                number:['09147.33333', '09648.33333', '09149.33333']
            },
            {
                name:'Ms.Thắm ',
                number:['0961.760.888']
            },
            {
                name:'Hotline',
                number:['01233.885.885', '0933.128.456 ']
            }
        ]
        this.address = [{
            province:"Hà Nội",
            city:"Thanh Xuân",
            town:"Cù Chính Lan",
            street:"",
            doorplate:"73A"
        }]
    }
}