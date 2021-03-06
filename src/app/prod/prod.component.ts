import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { SharpService } from '../core/sharp.serivce'
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {
  testJSON: Array<object> = [];
  tabTitle: Array<any> = [];
  xiangguan: Array<object> = [];
  selected: Number = 0;
  constructor(
      private sharpService: SharpService,
      private router: Router
  ) {
    this.testJSON = [
      {
          name:"Củ sạc nhanh TITan 2 cổng New",
          price:"250,000 ₫",
          pic:"../../assets/image/prodPic/13138732_235217886868479_7289910056908337875_n - Copy.jpg",
          intro:{
              title:"hàng chính hãng titan việt nam",
              content:[
                "Thiết kế đơn giản dễ sử dụng kèm 1 cổng usb",
                "Điều chỉnh dòng ra vào phù hợp",
                "Sử dụng chất liệu thân thiện với môi trường"
              ]
          },
          type: "PHỤ KIỆN AKUS",
          flag: "buleSkype"
      }
    ]
    this.tabTitle = ['Thông tin sản phẩm', 'Đánh giá sản phẩm']
    this.xiangguan =[
      {
          name:"Củ sạc nhanh TITan 2 cổng New",
          price:"250,000 ₫",
          pic:"../../assets/image/prodPic/13138732_235217886868479_7289910056908337875_n - Copy.jpg",
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
  }
  onSelect(name: string){
    this.sharpService.dySb.next([true,false,false])
    this.router.navigate(['/prod/'+name]);
  }
  selectTab(index){
    this.selected = index;
  }
  ngOnInit() {
  }

}
