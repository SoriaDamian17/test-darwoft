import { Injectable } from '@angular/core';
import { CONFIG } from '../config/config';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth(CONFIG.auth0);

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }
}
