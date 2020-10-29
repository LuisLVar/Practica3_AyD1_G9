import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CompraGiftcardsService } from './compra-giftcards.service';

describe('CompraGiftcardsService', () => {
  let service: CompraGiftcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CompraGiftcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
