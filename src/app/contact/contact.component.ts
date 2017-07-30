import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { slideInDownAnimation }  from '../animation'

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class ContactComponent implements OnInit {
  JSON: Array<Object> = [];
  showComponent: string;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.JSON = [{
      name: "CÔNG TY TNHH LINH PHỤ KIỆN DI ĐỘNG VIỆT TRUNG",
      address : {
          province:"Hà Nội",
          city:"Thanh Xuân",
          town:"Cù Chính Lan",
          street:"",
          doorplate:"73A"
      },
      number: ["09648.33333","0961.760.888","0988.235.835"],
      email: ["kinhdoanhviettrung68@gmail.com", "thuyhangnt.bg@gmail.com"]
    }]
  }

  ngOnInit() {
    console.log(this.route.params)
     this.route.params
　　　    .switchMap((params: Params)=>this.showComponent = params['type'])
          .subscribe(():void => {this.pageScroll()});
  }
  
  pageScroll(){
      //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
      window.scrollBy(0,-100);
      //延时递归调用，模拟滚动向上效果
      let scrolldelay = setTimeout('pageScroll()',100);
      //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
      var sTop=document.documentElement.scrollTop+document.body.scrollTop;
      //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
      if(sTop==0) clearTimeout(scrolldelay);
  }
}
