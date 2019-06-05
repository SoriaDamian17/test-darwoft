import { Component, OnInit } from '@angular/core';
import { i18n } from '../../config/i18n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  i18n = i18n;
  ngOnInit() {
  }
}
