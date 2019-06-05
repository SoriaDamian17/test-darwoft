import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { TOASTCONFIG, Type } from '../../shared/config/config';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  disabled: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private toastr: ToastrService) { }

  showNotification(type: Type, message: string, title?: string): void {

    switch (+type) {
      case Type.Success:
          this.showSuccess(message, title);
          break;
      case Type.Info:
          this.showInfo(message, title);
          break;
      case Type.Warning:
          this.showWarning(message, title);
          break;
      case Type.Error:
          this.showError(message, title);
          break;
      case Type.Hidden:
        break;
    }
  }

  private showSuccess(message, title) {
      this.toastr.success(message, title, TOASTCONFIG);
  }

  private showError(message, title) {
    this.toastr.error(message, title, TOASTCONFIG);
  }

  private showWarning(message, title) {
    this.toastr.warning(message, title, TOASTCONFIG);
  }

  private showInfo(message, title) {
    this.toastr.info(message, title, TOASTCONFIG);
  }
}
