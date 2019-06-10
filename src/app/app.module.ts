import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MoviesService } from './shared/services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { Auth0Service } from './shared/services/auth0.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [Auth0Service, ToastrService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
