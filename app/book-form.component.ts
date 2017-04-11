import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {Router} from'@angular/router';

import {bookListService} from './bookList.services';

@Component({
  selector :'book-form',
  templateUrl:'app/book-form.component.html',
  styleUrls:['app/book-form.component.css']
})
export class BookFormComponent{
  form;

  constructor(
    private formBuilder: FormBuilder,
    private bookListServices:bookListService,
    private router:Router) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control('Comics'),
      year: this.formBuilder.control('', Validators.compose([
		this.yearValidator,
		Validators.required
	  ])),
      price: this.formBuilder.control('',Validators.required),
    });
  }

 yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(book){
    console.log("Berhasil");
    this.bookListServices.add(book)
    .subscribe(() => {
      this.router.navigate(['/','list']);
    });
  }

}