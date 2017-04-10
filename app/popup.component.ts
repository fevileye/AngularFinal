import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:"book-popup",
    templateUrl:"app/popup.component.html",
    styleUrls: ['app/popup.component.css']
})
export class PopupComponent{
  @Input() book;
  
  @Output() close=new EventEmitter();
 
  index =1;

  onClose(){
    this.close.emit();
  }

  isVisible(){
    return this.book ? false:true;
  }

  gambar=[{
    id:1,
    URL:"./media/01.png"

  },
  {
    id:2,
    URL:"./media/02.png"

  },
  {
    id:3,
    URL:"./media/03.png"

  },
  {
    id:4,
    URL:"./media/04.png"

  },
  ]
}