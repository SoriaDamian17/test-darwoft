import { Component, Input } from '@angular/core';
import { i18n } from '../../config/i18n';
import { Auth0Service } from '../../services/auth0.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;
  @Input() subtitle: string;
  i18n = i18n;

  constructor(
    private auth0Service: Auth0Service
  ) { }

  login() {
    this.auth0Service.login();
  }
}
