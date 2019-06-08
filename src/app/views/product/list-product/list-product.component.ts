import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  loading = new Subject();
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
      this.loading.next(false);
      console.log(data.Search);
    });
  }
  /**
   * Filter Movies by Genre
   *
   * @param {string} filter
   * @memberof ListProductComponent
   */
  filterMovies(filter: string) {
    this.items = [];
    this.movieService.search(filter).subscribe((data: any) => {
      console.log(data);
      this.items.push(data.Search);
      console.log(data.Search);
    });
  }
  /**
   * Go Pagination in product view
   *
   * @param {number} pageLink
   * @memberof ListProductComponent
   */
  goPage(pageLink: number) {
    console.log(pageLink);
    this.router.navigate(['/product'], { queryParams: { page: pageLink }});
  }
  /**
   * Go product detail by id imdb
   *
   * @param {string} imdbID
   * @memberof ListProductComponent
   */
  ViewDetail(imdbID: string) {
    console.log(imdbID);
    this.router.navigate([`/product/${imdbID}`]);
  }
}
