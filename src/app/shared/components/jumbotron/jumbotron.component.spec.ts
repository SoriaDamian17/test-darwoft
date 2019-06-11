import { JumbotronComponent } from './jumbotron.component';

describe('JumbotronComponent', () => {
  let component: JumbotronComponent;

  beforeEach(() => {
    component = new JumbotronComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be inital elements value', () => {
    expect(component.title).toBeUndefined();
    expect(component.subtitle).toBeUndefined();
  });
});
