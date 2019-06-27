import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [CheckoutComponent, ShippingComponent, PayComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
