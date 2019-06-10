import { ProductComponent } from './product.component';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';
import { EMPTY } from 'rxjs';

describe('ProductComponent', () => {
  let activatedRoute: ActivatedRoute;
  let component: ProductComponent;
  let service: MoviesService;
  let modal: ModalService;

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    service = new MoviesService(null);
    modal = new ModalService();
    component = new ProductComponent(activatedRoute, service, modal, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initial elements value', () => {
    expect(component.id).toBeUndefined();
    expect(component.item).toEqual([]);
  });

  xit('Shoul be get items movies', () => {
    const paramQ = activatedRoute.snapshot.paramMap;
    const id = spyOn(paramQ, 'get').and.callFake(() => {
      return 'tt2975590';
    });
    const spy = spyOn(service, 'getMovies').and.callFake(() => {
      return {};
    });
    component.ngOnInit();
    expect(id).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
    expect(component.item).toEqual({});
  });

  it('should be open modal', () => {
    const spy = spyOn(modal, 'open').and.callFake(() => {
      return EMPTY;
    });
    component.openModal();
    expect(spy).toHaveBeenCalled();
  });
});
