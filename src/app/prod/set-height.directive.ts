import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[SetHeight]'
})
export class SetHeightDirective {

   constructor(private el: ElementRef) {
       
  }
  ngOnInit(){
    console.log(this.el);
    console.log(this.el.nativeElement.previousElementSibling.childNodes[1].clientHeight);
    console.log(this.el.nativeElement.previousElementSibling.offsetHeight);
    console.log(this.el.nativeElement.previousElementSibling.scrollHeight);
  }
}
