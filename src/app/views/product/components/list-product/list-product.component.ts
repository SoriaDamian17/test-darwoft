import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { OrderPipe } from 'ngx-order-pipe';

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
    private orderPipe: OrderPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.updatePage(params.page);
    });
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
      this.items.push(JSON.parse(storage));
    } else {
      this.movieService.getMovies(page).subscribe((data: any) => {
        sessionStorage.setItem('moviesData', JSON.stringify(data.Search));
        this.items.push(data.Search);
        setTimeout(() => {
          this.movieService.loading.next(false);
        }, 1000);
      });
    }
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
      this.items.push(data.Search);
    });
  }

  sortMovies(sort: string) {
    this.movieService.loading.next(true);
    const sortItems = this.items.sort((a, b) => {
      const nameA = a.Title.toLowerCase();
      const nameB = b.Title.toLowerCase();
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      return 0;
    });
    // const sortItems = this.items.sort((a, b) => a.Year.localeCompare(b.Year));
    console.log(sortItems);
    setTimeout(() => {
      this.items = [];
      this.items.push(sortItems[0]);
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
