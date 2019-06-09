import { ModalComponent } from './../../shared/modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  declarations: [
    ProductComponent,
    ModalComponent,
    ListProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [ModalService]
})
export class ProductModule { }
