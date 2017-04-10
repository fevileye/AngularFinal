import {Directive, HostListener,HostBinding} from '@angular/core';

@Directive({
  selector :'[bookImage]'
})
export class EnlargeDirective{
  @HostBinding('class.is-hovering') hovering=false;

  @HostListener ('mouseenter') onMouseEnter(){
    this.hovering=true;
  }

  @HostListener ('mouseleave') onmouseleave(){
    this.hovering=false;
  }
}