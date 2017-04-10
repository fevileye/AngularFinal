import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule,XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {BookListComponent} from './book-list-component';
import {BookComponent} from './book-component';
import {FavoriteDirective} from './favorite.directive';
import {EnlargeDirective} from './enlarge.directive';
import {StockListPipe} from './stock-list.pipe';
import {PopupComponent} from './popup.component';
import {BookFormComponent} from './book-form.component';
import {bookListService} from './bookList.services';
import {MockXHRBackend} from './mock-xhr-backend';
import {routing} from'./app.routing';

@NgModule({
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations:[
    AppComponent,
    BookListComponent,
    BookComponent,
    FavoriteDirective,
    EnlargeDirective,
    StockListPipe,
    PopupComponent,
    BookFormComponent
  ],
  providers:[
    bookListService,
    {provide : XHRBackend, useClass:MockXHRBackend}
  ],
  bootstrap:[
    AppComponent,
  ]
})
export class AppModule{}