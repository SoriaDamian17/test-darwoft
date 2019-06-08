import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config';
import { MOVIE } from '../models/movie.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  loading = new Subject();
  page: number;
  apiUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.page = 1;
    this.apiUrl = `${CONFIG.apiUrl}?apikey=${CONFIG.apikey}`;
  }

  getMovies(page: number = 0) {
    this.page = (page > 0 ? page : this.page);
    this.loading.next(true);
    return this.httpClient.get<MOVIE>(`${this.apiUrl}&s=batman&page=${this.page}`);
  }

  getMovie(id: string) {
    this.loading.next(true);
    return this.httpClient.get<MOVIE>(`${this.apiUrl}&i=${id}&plot=full`);
  }

  search(search: string) {
    this.loading.next(true);
    console.log(`${this.apiUrl}&s=${search}`);
    return this.httpClient.get<MOVIE>(`${this.apiUrl}&s=${search}`);
  }
}
