import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Auth0Service } from '../../services/auth0.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule],
      providers: [ Auth0Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia abrir login', () => {
    const service = TestBed.get(Auth0Service);
    const espia = spyOn(service, 'login').and.callFake( resp => {
      return EMPTY;
    });
    component.login();
    expect(espia).toHaveBeenCalled();
  });

});
