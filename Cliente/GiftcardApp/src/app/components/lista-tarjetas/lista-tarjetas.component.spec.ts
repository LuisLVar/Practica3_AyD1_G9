import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarjetasComponent } from './lista-tarjetas.component';
import {MenuClienteComponent} from '../menu-cliente/menu-cliente.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ListaTarjetasComponent', () => {
  let component: ListaTarjetasComponent;
  let fixture: ComponentFixture<ListaTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTarjetasComponent, MenuClienteComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
