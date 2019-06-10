import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/home/home.module#HomeModule',
  },
  {
    path: 'product',
    loadChildren: './views/product/product.module#ProductModule'
  },
  {
    path: 'contact',
    loadChildren: './views/contact/contact.module#ContactModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
