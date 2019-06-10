import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/shared/services/movies.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let service: MoviesService;

  beforeEach(() => {
    service = new MoviesService(null);
    component = new HomeComponent(new ActivatedRoute(), service, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
