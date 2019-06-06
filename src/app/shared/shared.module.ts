import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent
  ],
})
export class SharedModule { }
