import { TestBed } from '@angular/core/testing';

import { UsuarioMockService } from './usuario-mock.service';

describe('UsuarioMockService', () => {
  let service: UsuarioMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
