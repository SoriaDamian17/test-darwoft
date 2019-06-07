import { ContactComponent } from './contact.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactComponent', () => {

  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, ToastrModule.forRoot(), SharedModule ],
      providers: [NotificationService, ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Validations', () => {

    it('Form Create', () => {
      expect(component.formGroup).toBe(undefined);
      component.buildForm();
      expect(component.formGroup).toBeTruthy();
    });

    it('Deberiamos crear el formulario con un campo', () => {
      component.buildForm();
      const form = component.formGroup;

      expect(form.contains('firtsname')).toBeTruthy();
    });

    it('Todo los campos deberian ser obligatorios', () => {
      let control = component.formGroup.get('firstname');
      control.setValue('');
      expect(control.valid).toBe(false);

      control = component.formGroup.get('lastname');
      control.setValue('');
      expect(control.valid).toBe(false);

      control = component.formGroup.get('email');
      control.setValue('');
      expect(control.valid).toBe(false);

      control = component.formGroup.get('phone');
      control.setValue('');
      expect(control.valid).toBe(false);

      control = component.formGroup.get('message');
      control.setValue('');
      expect(control.valid).toBe(false);
    });

  });

});
