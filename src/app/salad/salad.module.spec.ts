import { SaladModule } from './salad.module';

describe('SaladModule', () => {
  let saladModule: SaladModule;

  beforeEach(() => {
    saladModule = new SaladModule();
  });

  it('should create an instance', () => {
    expect(saladModule).toBeTruthy();
  });
});
