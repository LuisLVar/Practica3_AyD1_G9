import { TestBed } from '@angular/core/testing';

import { RegistroService } from './registro.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RegistroService', () => {
  let service: RegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
