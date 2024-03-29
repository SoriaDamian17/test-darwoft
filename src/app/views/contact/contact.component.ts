import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/app/shared/config/i18n';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;
  i18n = i18n;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  /**
   * Create form contact
   *
   * @memberof ContactComponent
   */
  buildForm() {
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  /**
   * Submit Form
   *
   * @memberof ContactComponent
   */
  sendMessage() {
    if (this.formGroup.valid) {
        this.notificationService.showSuccess('Gracias por enviarnos su consulta.');
    } else {
        this.notificationService.showError('Todos los campos son requeridos.');
    }
  }
}
