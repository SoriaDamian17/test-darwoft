import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage: number;
  prevPage: number;
  nextPage: number;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.prevPage = 1;
    this.nextPage = 1;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      // tslint:disable-next-line: radix
      this.currentPage = parseInt(params.page);
      this.prevPage = (this.currentPage !== 1 ? (this.currentPage - 1) : 1);
      this.nextPage = (this.currentPage !== 3 ? (this.currentPage + 1) : 3);
    });

  }

}
