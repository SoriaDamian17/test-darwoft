import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config';
import { MOVIE } from '../models/movie.model';
import { Subject } from 'rxjs';

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

  /**
   * Get Movies list by page
   *
   * @param {number} [page=0]
   * @returns
   * @memberof MoviesService
   */
  getMovies(page: number = 0) {
    this.page = (page > 0 ? page : this.page);
    this.loading.next(true);
    return this.httpClient.get<MOVIE[]>(`${this.apiUrl}&s=batman&page=${this.page}`);
  }

  /**
   * Get Movie by Id
   *
   * @param {string} id
   * @returns
   * @memberof MoviesService
   */
  getMovie(id: string) {
    this.loading.next(true);
    return this.httpClient.get<MOVIE>(`${this.apiUrl}&i=${id}&plot=full`);
  }

  /**
   * Sort Movies
   *
   * @param {string} sort
   * @memberof MoviesService
   */
  sortMovies(sort: string, movies: any) {
    return movies.sort((a, b) => a.Title.rendered.localeCompare(b.Title.rendered));
  }

  /**
   * Search Movie by query string
   *
   * @param {string} search
   * @returns
   * @memberof MoviesService
   */
  search(search: string) {
    this.loading.next(true);
    return this.httpClient.get<MOVIE[]>(`${this.apiUrl}&s=${search}`);
  }
}
