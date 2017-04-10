import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector:'[favoriteBook]'
})
export class FavoriteDirective{
  @HostBinding ('class.is-favorite') isFavorite=true;
  @Input() set favoriteBook(value){
    this.isFavorite=value;
  }
}