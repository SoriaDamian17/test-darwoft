import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  items: any = [];
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.page = params.page;
      console.log(this.page); // popular
    });
    this.movieService.getMovies(this.page).subscribe((data: any) => {
      this.items.push(data.Search);
      console.log(data.Search);
    });
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
    this.router.navigate(['/product'], { queryParams: { page: pageLink }});
  }

  ViewDetail(imdbID: string) {
    console.log(imdbID);
    this.router.navigate([`/product/${imdbID}`]);
  }
}
