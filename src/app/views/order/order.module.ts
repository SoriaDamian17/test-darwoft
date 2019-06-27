import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PayComponent } from './pay/pay.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'pay', component: PayComponent },
  { path: 'confirm', component: ConfirmComponent },
];

@NgModule({
  declarations: [
    CheckoutComponent,
    ShippingComponent,
    PayComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrderModule { }
