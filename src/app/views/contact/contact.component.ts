import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/app/shared/config/i18n';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Type } from 'src/app/shared/config/config';

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

  buildForm() {
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.formGroup.valid) {
      this.notificationService.showNotification(Type.Success, 'Gracias por enviarnos su consulta.');
    } else {
      this.notificationService.showNotification(Type.Error, 'Todos los campos son requeridos.');
    }
  }
}
