import { Component } from '@angular/core';
import { i18n } from '../../config/i18n';
import { Auth0Service } from '../../services/auth0.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  i18n = i18n;

  constructor(
    private auth0Service: Auth0Service
  ) { }

  login() {
    this.auth0Service.login();
  }
}
