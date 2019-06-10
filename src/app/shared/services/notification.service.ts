import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const TOASTCONFIG = {
  timeOut: 3000,
  onActivateTick: true,
  positionClass: 'toast-top-center'
};

export enum Type {'Success', 'Info', 'Warning', 'Error', 'Hidden'}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title?: string) {
      this.toastr.success(message, title, TOASTCONFIG);
  }

  showError(message: string, title?: string) {
    this.toastr.error(message, title, TOASTCONFIG);
  }

  showWarning(message: string, title?: string) {
    this.toastr.warning(message, title, TOASTCONFIG);
  }

  showInfo(message: string, title?: string) {
    this.toastr.info(message, title, TOASTCONFIG);
  }
}
