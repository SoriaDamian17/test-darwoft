import { Component, Input } from '@angular/core';
import { i18n } from '../../config/i18n';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item: any;
  i18n = i18n;

}
