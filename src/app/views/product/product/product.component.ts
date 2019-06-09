import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from './../../../shared/services/movies.service';
import { ModalService } from './../../../shared/services/modal.service';

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
    console.log(this.id);
    this.movieService.getMovie(this.id).subscribe((data: any) => {
      console.log(data);
      this.item.push(data);
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
