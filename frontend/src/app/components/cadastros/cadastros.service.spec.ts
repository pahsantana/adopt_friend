import { TestBed } from '@angular/core/testing';

import { CadastrosService } from './cadastros.service';

describe('CadastrosService', () => {
  let service: CadastrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
