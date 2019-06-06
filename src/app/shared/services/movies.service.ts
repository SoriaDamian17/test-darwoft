import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config';
import { MOVIE } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  page: number;

  constructor(
    private httpClient: HttpClient
  ) {
    this.page = 1;
  }

  getMovies() {
    return this.httpClient.get<MOVIE>(`${CONFIG.apiUrl}?apikey=${CONFIG.apikey}&s=batman&page=${this.page}`);
  }

}
