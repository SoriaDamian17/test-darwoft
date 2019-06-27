import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AppPreloadingStrategy } from './shared/class/app-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/home/home.module#HomeModule',
    data: { preload: true, delay: false },
  },
  {
    path: 'product',
    loadChildren: './views/product/product.module#ProductModule',
    data: { preload: true, delay: true },
  },
  {
    path: 'contact',
    loadChildren: './views/contact/contact.module#ContactModule',
    data: { preload: true, delay: false },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: AppPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
