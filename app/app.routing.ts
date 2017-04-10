import {Routes,RouterModule} from '@angular/router';

import {BookFormComponent} from './book-form.component';
import {BookListComponent} from './book-list-component';
const appRoutes: Routes=[
  {path:'add', component :BookFormComponent},
  {path:'list', component:BookListComponent},
  {path:'',pathMatch:'full',redirectTo:'list'}
];

export const routing= RouterModule.forRoot(appRoutes);