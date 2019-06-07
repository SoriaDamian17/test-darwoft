import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { IsotopeComponent } from './components/isotope/isotope.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SearchComponent,
    IsotopeComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    IsotopeComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
