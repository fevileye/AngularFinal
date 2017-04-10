import {Component} from '@angular/core';
import {Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector :'book-component',
  templateUrl:'app/book-component.html',
  styleUrls:['app/book-component.css']
})
export class BookComponent{
  @Input() book;
  @Output() delete=new EventEmitter();
  @Output() preview= new EventEmitter();

  onCallDelete(){
    this.delete.emit(this.book);
  }

  onCallPreview(){
    this.preview.emit(this.book);
  }
}