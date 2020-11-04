import { TestBed } from '@angular/core/testing';

import { TarifaService } from './tarifa.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TarifaService', () => {
  let service: TarifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TarifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
