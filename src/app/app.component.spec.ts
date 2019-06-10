import { AppComponent } from './app.component';
import { MoviesService } from './shared/services/movies.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let service: MoviesService;

  beforeEach(() => {
    service = new MoviesService(null);
    component = new AppComponent(null, service);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'darwoft'`, () => {
    expect(component.title).toEqual('darwoft');
  });

  it('should be show loading is true', () => {
    let isLoading = false;
    service.loading.subscribe( (data: boolean) => {
      isLoading = data;
    });
    service.loading.next(true);
    expect(isLoading).toBe(true);
  });

});
