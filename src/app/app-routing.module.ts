import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
     {
       path: 'home',
       loadChildren: './views/home/home.module#HomeModule'
     },
     {
       path: 'contact',
       loadChildren: './views/contact/contact.module#ContactModule'
     }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
