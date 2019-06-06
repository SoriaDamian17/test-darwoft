import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private router: Router
  ) { }

  searchMovie(query: string) {
    console.log(query);
    this.router.navigate(['home'], { queryParams: { search: query } });
  }

}
