import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Observable } from 'rxjs';
import { MOVIE } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  items$: Observable<MOVIE[]>;
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
    .subscribe(params => this.updatePage(params.page) );
  }
  /**
   * Update List page
   *
   * @param {number} page
   * @memberof ListProductComponent
   */
  updatePage(page: number) {
    if (sessionStorage.getItem('moviesData')
    && page === 1) {
      const storage = sessionStorage.getItem('moviesData');
      this.items$ = JSON.parse(storage);
    } else {
      this.items$ = this.movieService.getMovies(page);
      // sessionStorage.setItem('moviesData', JSON.stringify(this.items$.Search));
      setTimeout(() => {
        this.movieService.loading.next(false);
      }, 1000);
    }
  }
  /**
   * Filter Movies by Genre
   *
   * @param {string} filter
   * @memberof ListProductComponent
   */
  filterMovies(filter: string) {
    this.items$ = this.movieService.search(filter);
    setTimeout(() => {
      this.movieService.loading.next(false);
    }, 1000);
  }
  /**
   * Go Pagination in product view
   *
   * @param {number} pageLink
   * @memberof ListProductComponent
   */
  goPage(pageLink: number) {
    this.router.navigate(['/product'], { queryParams: { page: pageLink }});
  }
  /**
   * Go product detail by id imdb
   *
   * @param {string} imdbID
   * @memberof ListProductComponent
   */
  ViewDetail(imdbID: string) {
    this.router.navigate([`/product/${imdbID}`]);
  }
}
