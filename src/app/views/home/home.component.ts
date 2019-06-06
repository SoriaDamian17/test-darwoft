import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.items.push(data.Search);
      console.log(data.Search);
    });

    console.log(this.items);
  }

}
