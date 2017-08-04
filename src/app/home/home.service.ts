import { Injectable } from "@angular/core"

Injectable()

export class HomeService{
    public JSON(){
        return [
            //tab 1
            {
                tabName: "Sản phẩm mới",
                item:[
                    {
                        name:"Củ sạc nhanh TITan 2 cổng New",
                        price:"250,000 ₫",
                        pic:"../../assets/image/prodPic/20170731141229.jpg",
                        intro:{
                            title:"hàng chính hãng titan việt nam",
                            content:[]
                        }
                    },
                    {
                        name:"Kệ Gỗ Đa Năng TiTan Chính Hãng",
                        price:"49,000 ₫",
                        pic:"../../assets/image/prodPic/13442240_657004257783667_6106572242798263755_n - Copy.jpg",
                        intro:{
                            title:"hàng chính hãng titan việt nam",
                            content:[]
                        }
                    },
                    {
                        name:"Củ sạc nhanh TITan 2 cổng New",
                        price:"348,000 ₫",
                        pic:"../../assets/image/prodPic/1470222147822_53.jpg",
                        intro:{
                            title:"Củ sạc liền dây micro Titan",
                            content:[
                                "Thiết kế đơn giản dễ sử dụng kèm 1 cổng usb",
                                "Điều chỉnh dòng ra vào phù hợp",
                                "Sử dụng chất liệu thân thiện với môi trường"
                            ]
                        }
                    },
                    {
                        name:"Củ sạc nhanh TITan 2 cổng New",
                        price:"250,000 ₫",
                        pic:"../../assets/image/prodPic/1473219403611_5371.jpg",
                        intro:{
                            title:"Tai nghe dây Titan Made in Việt nam",
                            content:[
                                "Thiết kế phong cách, sành điệu",
                                "Chất lượng âm thanh cao",
                                "Sản phẩm mới của Titan"
                            ]
                        }
                    }
                ]
            },
            //tab2
            {
                tabName: "XiaoMi",
                item:[
                {
                    name:"Router Wifi Mi Thế Hệ  3",
                    price:"149,000 ₫",
                    pic:"../../assets/image/prodPic/1477897384072_21096.jpg",
                    intro:{
                        title:"",
                        content:[]
                    }
                },
                {
                    name:"MiBox TV Gen 3C",
                    price:"149,000 ₫",
                    pic:"../../assets/image/prodPic/1477897384072_21096.jpg",
                    intro:{
                        title:"Tivi Box Xiaomi Mibox 3C Chính Hãng",
                        content:[
                            "Phân phối chính hãng bởi Xiaomiviet.vn",
                            "Vi xử lý nhanh, ram 1GB, hỗ trợ Ultra HD 4K",
                            "Cổng USB xem phim qua ổ cứng"
                        ]
                    }
                },
                {
                    name:"Gậy chụp ảnh BLT Tripod Xiaomi",
                    price:"149,000 ₫",
                    pic:"../../assets/image/prodPic/1477897384072_21096.jpg",
                    intro:{
                        title:"Gậy chụp ảnh kiêm chân chụp ảnh tripod Xiaomi - kết nối bluetooth",
                        content:[]
                    }
                },
                {
                    name:"Gậy chụp ảnh BLT Tripod Xiaomi",
                    price:"279,000 ₫",
                    pic:"../../assets/image/prodPic/18951438_1576250789066260_1179102523557030747_n.jpg",
                    intro:{
                        title:"Gậy chụp ảnh kiêm chân chụp ảnh tripod Xiaomi - kết nối bluetooth",
                        content:[]
                    }
                }
                ]
            },
            //tab3
            {
                tabName: "Titan",
                item:[
                {
                    name:"Củ sạc nhanh TITan 2 cổng New",
                    price:"359,000 ₫",
                    pic:"../../assets/image/prodPic/2016_02_05_11_41_18_119fe5a4db005056ae143b.jpg",
                    intro:{
                        title:"Tai nghe dây Titan Made in Việt nam",
                        content:[
                            "Thiết kế phong cách, sành điệu",
                            "Chất lượng âm thanh cao",
                            "Sản phẩm mới của Titan"
                        ]
                    }
                },
                {
                    name:"Kệ Gỗ Đa Năng TiTan Chính Hãng",
                    price:"267,000 ₫",
                    pic:"../../assets/image/prodPic/bo-phat-wifi-xiaomi-mi-router-wifi-3-ac1200-hinh-anh-5.jpg",
                    intro:{
                        title:"",
                        content:[]
                    }
                },
                {
                    name:"Tai nghe blutooth chính hãng TiTan ",
                    price:"89,000 ₫",
                    pic:"../../assets/image/prodPic/bộ phát wifi.jpg",
                    intro:{
                        title:"Tai nghe dây Titan Made in Việt nam",
                        content:[
                            "Thiết kế phong cách, sành điệu",
                            "Chất lượng âm thanh cao",
                            "Sản phẩm mới của Titan"
                        ]
                    }
                },
                {
                    name:"Củ sạc liền dây micro Titan",
                    price:"993,000 ₫",
                    pic:"../../assets/image/prodPic/cap thong minh ios.jpg",
                    intro:{
                        title:"Củ sạc liền dây micro Titan",
                        content:[
                            "Thiết kế đơn giản dễ sử dụng kèm 1 cổng usb",
                            "Điều chỉnh dòng ra vào phù hợp",
                            "Sử dụng chất liệu thân thiện với môi trường"
                        ]
                    }
                }
                ]
            }
        ]
    }
}