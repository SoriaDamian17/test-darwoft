import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() page = new EventEmitter();

  goPage(page: number) {
    console.log('Emitimos page:', page);
    this.page.emit(page);
  }

}
