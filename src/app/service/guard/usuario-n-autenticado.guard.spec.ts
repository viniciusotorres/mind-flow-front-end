import { TestBed } from '@angular/core/testing';

import { UsuarioNAutenticadoGuard } from './usuario-n-autenticado.guard';

describe('UsuarioNAutenticadoGuard', () => {
  let guard: UsuarioNAutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioNAutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
