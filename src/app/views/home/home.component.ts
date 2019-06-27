import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  items: any = [];
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        this.page = params.page;
        console.log(this.page); // popular
    });
    this.movieService.getMovies(this.page).subscribe((data: any) => {
      this.items.push(data.Search);
      console.log(data.Search);
    });
    console.log(this.items);
  }

  filterMovies(filter: string) {
    this.items = [];
    this.movieService.search(filter).subscribe((data: any) => {
      console.log(data);
      this.items.push(data.Search);
      console.log(data.Search);
    });
  }

  goPage(pageLink: number) {
    console.log(pageLink);
    this.router.navigate(['/home'], { queryParams: { page: 2 }});
  }
}
