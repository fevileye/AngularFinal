import {Injectable} from '@angular/core';
import {Http ,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class bookListService{
constructor(private http:Http){}

get(){
  //return this.books;
  return this.http.get('books')
  .map(response=>{
    return response.json().books;
  });
}
add(book){
  //this.books.push(book);
  return this.http.post('books',book)
  .map(response=>{});
}
delete(book){
  //let index=this.books.indexOf(book);
  //if(index >=0){
  //  this.books.splice(index,1);
  //}

  return this.http.delete(`books/${book.id}`)
  .map(response=>{});
}

books=[{
    id:1,
    title: "Naruto",
    category : "Comic",
    year:2009,
    isFavorite:false,
    stock:true,
    price:5000,
    img:"media/naruto.jpg"
  },
  {
    id:2,
    title: "Times",
    category : "Novel",
    year:2009,
    isFavorite:true,
    stock:false,
    price:10000,
    img:"media/time.png"
  }];

}