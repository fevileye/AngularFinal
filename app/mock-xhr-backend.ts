import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('books?title=') >= 0 || request.url === 'books') {
            var title;
            if (request.url.indexOf('?') >= 0) {
              title = request.url.split('=')[1];
              if (title === 'undefined') title = '';
            }
            var books;
            if (title) {
              books = this._books.filter(book => book.title === title);
            } else {
              books = this._books;
            }
            responseOptions = new ResponseOptions({
              body: { books: JSON.parse(JSON.stringify(books)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            books = this._books.filter(book => book.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(books[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var book = JSON.parse(request.text().toString());
          book.id = this._getNewId();
          this._books.push(book);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteMediaItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteMediaItem(id) {
    var book = this._books.find(book => book.id === id);
    var index = this._books.indexOf(book);
    if (index >= 0) {
      this._books.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._books.length > 0) {
      return Math.max.apply(Math, this._books.map(book => book.id)) + 1;
    }
  }

  _books=[{
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