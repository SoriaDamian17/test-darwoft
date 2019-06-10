import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {

  let service: MoviesService;

  beforeEach(() => {
    service = new MoviesService(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Shoul be return json movies', () => {
    const spy = spyOn(service, 'getMovies').and.callFake(() => {

    });

  });

});
