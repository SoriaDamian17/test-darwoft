import { TestBed } from '@angular/core/testing';

import { Auth0Service } from './auth0.service';
import { EMPTY } from 'rxjs';

describe('Auth0Service', () => {

  let service: Auth0Service;

  beforeEach(() => {
    service = new Auth0Service(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call login auth0', () => {
    const spy = spyOn(service, 'login').and.callFake(() => {
      return EMPTY;
    });

    service.login();

    expect(spy).toHaveBeenCalled();
  });

});
