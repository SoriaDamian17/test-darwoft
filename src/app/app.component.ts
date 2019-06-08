import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { MoviesService } from './shared/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading: boolean;
  public primaryColour = '#dd0031';
  public secondaryColour = '#ccc';
  public loadingTemplate: TemplateRef<any>;

  title = 'darwoft';

  constructor(
    private router: Router,
    private movieService: MoviesService
  ) {
    // this.router.navigate(['home']);
  }

  ngOnInit() {
    this.movieService.loading.subscribe(() => {
      this.loading = true;
    });
  }
}
