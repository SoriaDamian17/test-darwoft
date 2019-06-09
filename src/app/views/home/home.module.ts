import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [HttpClient, MoviesService]
})
export class HomeModule { }
