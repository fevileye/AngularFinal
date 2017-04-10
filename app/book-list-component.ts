import {Component} from '@angular/core';
import {bookListService} from './bookList.services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'book-booklist',
  templateUrl:'app/book-list-component.html',
  styleUrls:['app/book-list-component.css']
})
export class BookListComponent{
  constructor (private bookListServices:bookListService,
  private activatedRoute:ActivatedRoute ){}

  books;
  title='';

  ngOnInit(){
    this.bookListServices.get().subscribe(books=>{
      this.books=books;
    });
  }
  
  data=null;

  onDeleteOperation(book){
   
    this.bookListServices.delete(book)
    .subscribe(()=>{
       this.bookListServices.get().subscribe(books=>{
      this.books=books;
    });
    });
  }

  onPreviewOperation(book){
    this.data=book;
  }
  onCallClose(){
    this.data=null;
  }


  
}