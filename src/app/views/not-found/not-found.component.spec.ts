import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;

  beforeEach(() => {
    component = new NotFoundComponent();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });
});
