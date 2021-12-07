import { TestBed } from '@angular/core/testing';

import { AlunoTrilhasService } from './aluno-trilhas.service';

describe('AlunoTrilhasService', () => {
  let service: AlunoTrilhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoTrilhasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
