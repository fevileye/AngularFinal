import {Pipe} from '@angular/core';

@Pipe({
  name:'StockList'
})
export class StockListPipe{
  transform(Books){
    var stocks=[];
    Books.forEach(book => {
      if(book.stock===true){
        stocks.push(book.title);
      }
    });
    return stocks.join(', ');
  }
}