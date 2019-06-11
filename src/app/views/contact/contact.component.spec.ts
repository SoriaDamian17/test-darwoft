import { ContactComponent } from './contact.component';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { EMPTY } from 'rxjs';

describe('ContactComponent', () => {

  let component: ContactComponent;
  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService(null);
    component = new ContactComponent(new FormBuilder(), service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Validations', () => {

    beforeEach(() => {
      component.buildForm();
    });

    it('Form Create', () => {
      expect(component.formGroup).toBeTruthy();
    });

    it('Deberiamos crear el formulario con un campo', () => {
      expect(component.formGroup.contains('firstname')).toBeTruthy();
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

    it('Should be send message when form is complete', () => {
        const firstname = component.formGroup.get('firstname');
        firstname.setValue('Damian');

        const lastname = component.formGroup.get('lastname');
        lastname.setValue('Soria');

        const email = component.formGroup.get('email');
        email.setValue('damian.soria.web@gmail.com');

        const phone = component.formGroup.get('phone');
        phone.setValue('3512442105');

        const message = component.formGroup.get('message');
        message.setValue('hola');

        const spy = spyOn(service, 'showSuccess').and.callFake(() => {
          return EMPTY;
        });
        component.sendMessage();
        expect(component.formGroup.valid).toBe(true);
        expect(spy).toHaveBeenCalled();
    });

    it('Should be error message when form is incomplete', () => {
      const firstname = component.formGroup.get('firstname');
      firstname.setValue('Damian');

      const lastname = component.formGroup.get('lastname');
      lastname.setValue('Soria');

      // Empty value;
      const email = component.formGroup.get('email');
      email.setValue('');

      const phone = component.formGroup.get('phone');
      phone.setValue('3512442105');

      const message = component.formGroup.get('message');
      message.setValue('hola');

      const spy = spyOn(service, 'showError').and.callFake(() => {
        return EMPTY;
      });
      component.sendMessage();
      expect(component.formGroup.valid).toBe(false);
      expect(spy).toHaveBeenCalled();
    });
  });


});
