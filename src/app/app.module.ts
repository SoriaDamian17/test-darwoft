import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MoviesService } from './shared/services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { Auth0Service } from './shared/services/auth0.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Auth0Service, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
