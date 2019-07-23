import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService, MoviesService } from '../../../../shared/services';
import { MOVIE } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  id: string;
  item: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private modalService: ModalService,
    private router: Router
  ) { }
  /**
   * Get list detail by id movie
   * @params :id
   * @memberof ProductComponent
   */
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.id).subscribe((data: any) => {
      this.item.push(data);
      setTimeout(() => {
        this.movieService.loading.next(false);
      }, 1000);
    });
  }
  /**
   * unsuscribe del movieService
   *
   * @memberof ProductComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModal() {
    this.modalService.open('movie-trailer');
  }
}
