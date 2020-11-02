import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCompraComponent } from './historial-compra.component';
import {MenuClienteComponent} from '../menu-cliente/menu-cliente.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HistorialCompraComponent', () => {
  let component: HistorialCompraComponent;
  let fixture: ComponentFixture<HistorialCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialCompraComponent, MenuClienteComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
