import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newLists: Array<Object> = [];
  constructor() {
    this.newLists=[
      {
        title:"XE XIAOMI NINEBOT MINI CHÍNH HÃNG XIAOMI HTTP://PHUKIENVIETTRUNG.VN/",
        desrc:"http://phukienviettrung.vn/",
        href:"http://phukienviettrung.vn/",
        imgUrl:"../../assets/image/news/1.jpg"
      },
      {
        title:"IN ẤN, KHẮC DA TẤT CẢ CÁC SẢN PHẨM ỐP LƯNG BAO DA THEO YÊU CẦU.",
        desrc:"PHỤ KIỆN VIỆT TRUNG Chuyên phân phối BUÔN SỈ LẺ linh phụ kiện điện thoại máy tính bảng GIÁ RẺ NHẤT. LIÊN HỆ MUA HÀNG: 09648.33333(MR. VIỆT) 0961.760.888 (MR DƯƠNG) 01686.133.888( MS. THÚY HẰNG) CAM KẾT 100% HÀI LÒNG",
        href:"http://phukienviettrung.vn/view/240-in-an-khac-da-tat-ca-cac-san-pham-op-lung-bao-da-theo-yeu-cau.html",
        imgUrl:"../../assets/image/news/2.jpg"
      },
      {
        title:"NHẬN BIẾT PIN SẠC DỰ PHÒNG XIAOMI FAKE VÀ CHÍNH HÃNG !!!",
        desrc:"",
        href:"http://phukienviettrung.vn/view/180-cau-hoi-thuong-gap.html",
        imgUrl:"../../assets/image/news/3.png"
      },
      {
        title:"HƯỚNG DẪN MUA HÀNG",
        desrc:"Hướng dẫn mua hàng",
        href:"http://phukienviettrung.vn/view/28-huong-dan-mua-hang.html",
        imgUrl:"../../assets/image/news/1.jpg"
      },
      {
        title:"CHÍNH SÁCH HOÀN TRẢ",
        desrc:"http://phukienviettrung.vn/view/27-chinh-sach-hoan-tra.html",
        href:"http://phukienviettrung.vn/view/27-chinh-sach-hoan-tra.html",
        imgUrl:"../../assets/image/news/2.jpg"
      },
      {
        title:"ĐIỀU KHOẢN DỊCH VỤ",
        desrc:"ĐIỀU KHOẢN DỊCH VỤ",
        href:"http://phukienviettrung.vn/view/24-dieu-khoan-dich-vu.html",
        imgUrl:"../../assets/image/news/3.png"
      },
      {
        title:"GIỚI THIỆU",
        desrc:"http://phukienviettrung.vn/",
        href:"http://phukienviettrung.vn/view/22-gioi-thieu.html",
        imgUrl:"../../assets/image/news/1.jpg"
      }
    ]
  }

  ngOnInit() {
  }

}
