import { TestBed } from '@angular/core/testing';

import { TypesignalementService } from './typesignalement.service';

describe('TypesignalementService', () => {
  let service: TypesignalementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesignalementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
