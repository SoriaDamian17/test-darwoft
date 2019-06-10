import { Component, EventEmitter, Input, Output } from '@angular/core';
import { i18n } from '../../config/i18n';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item: any;
  @Output() emitAddToCar = new EventEmitter();
  @Output() emitViewDetail = new EventEmitter();
  i18n = i18n;

  viewDetail(title: string) {
    this.emitViewDetail.emit(title);
  }
}
