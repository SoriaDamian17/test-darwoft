import { ListProductComponent } from './list-product.component';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let service: MoviesService;

  beforeEach(() => {
    service = new MoviesService(null);
    component = new ListProductComponent(new ActivatedRoute(), service,  null);
    sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be initial elements value', () => {
    expect(component.items).toEqual([]);
    expect(component.page).toBeUndefined();
  });

  it('Should be use api if session is undefined', () => {
    const session = sessionStorage.getItem('moviesData');
    expect(session).toBeNull();
  });

  it('Should be use session storage', () => {
    sessionStorage.setItem('moviesData', JSON.stringify({title: 'batman'}));
    const session = sessionStorage.getItem('moviesData');
    expect(session).toEqual(JSON.stringify({title: 'batman'}));
  });

});
