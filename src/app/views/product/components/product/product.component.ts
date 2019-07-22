import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService, MoviesService } from '../../../../shared/services';
import { MOVIE } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id: string;
  item: Observable<MOVIE>;

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
    this.item = this.movieService.getMovie(this.id);
    setTimeout(() => this.movieService.loading.next(false), 1000);
  }

  openModal() {
    this.modalService.open('movie-trailer');
  }
}
