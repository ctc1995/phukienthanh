import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { SharpService } from '../core/sharp.serivce'
import { HomeService }  from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabTitle: Array<string>=[];
  tabJSON: Array<any>;
  selected: number = 0;
  constructor(
    private homeService: HomeService,
    private sharpService: SharpService,
    private router: Router
  ){
    this.tabJSON = this.homeService.JSON();
  }

  ngOnInit() { 
    for(let item of this.tabJSON){
      this.tabTitle.push(item['tabName']);
    }
  }
  selectTab(index){
    this.selected = index;
  }
  //路由跳转
  onSelect(name: string){
    this.sharpService.dySb.next([true,false,false])
    this.router.navigate(['/prod/name'])
  }
  //将价格进行千分位转换 
  toThousands(num) {
      num = (num || 0).toString()
      let result = '';
      while (num.length > 3) {
          result = ',' + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
      }
      if (num) { result = num + result; }
      return result;
  }
}
