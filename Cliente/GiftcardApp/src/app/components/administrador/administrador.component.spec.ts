import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorComponent } from './administrador.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';


class Tarifa { 
  tarifa: number = 7.77;

  getConversion(x: number) { 
    return x * this.tarifa;
  }

}

describe('AdministradorComponent', () => {
  let component: AdministradorComponent;
  let fixture: ComponentFixture<AdministradorComponent>;
  let tarifa: Tarifa;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Prueba para validar cambio de tarifa', ()=>{
    it('La tarifa actual es 7.77, debe devolver el numero multiplicado por tarifa', () => {
      tarifa = new Tarifa();
      expect(tarifa.getConversion(5)).toEqual(5*7.77);
    });
  });

  describe('Prueba para obtener catalogo', ()=>{
    it('Arreglo de Arrays debe ser mayor a cero', () => {
      expect(component.catalogo).toBeDefined();
    });
  });




});
