import { HeaderComponent } from './header.component';
import { Auth0Service } from '../../services/auth0.service';
import { EMPTY } from 'rxjs';
import { i18n } from '../../config/i18n';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let service: Auth0Service;

  beforeEach(() => {
    service = new Auth0Service(null);
    component = new HeaderComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Initials elements value', () => {
    expect(component.title).toBeUndefined();
    expect(component.subtitle).toBeUndefined();
    expect(component.i18n).toBe(i18n);
  });

  it('Deberia abrir login', () => {
    const spy = spyOn(service, 'login').and.callFake( resp => {
      return EMPTY;
    });
    component.login();
    expect(spy).toHaveBeenCalled();
  });

});
