import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacComponent } from './transac.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TransacComponent', () => {
  let component: TransacComponent;
  let fixture: ComponentFixture<TransacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
