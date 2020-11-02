import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTarjetaComponent } from './pago-tarjeta.component';
import {MenuClienteComponent} from '../menu-cliente/menu-cliente.component';
import {Carro} from '../../models/pagos.interface';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

class PagoService {

  carri: Array<Carro> = [
  {name:"Microsoft", cantidad:2, total:50, tipo_giftcard:5, precio:25},
  {name:"Steam", cantidad:3, total:30, tipo_giftcard:3, precio:10}
  ];
  
  obtener_carrito(){
    return this.carri;
  }

}

describe('PagoTarjetaComponent', () => {
  let component: PagoTarjetaComponent;
  let fixture: ComponentFixture<PagoTarjetaComponent>;
  let pagoService: PagoService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoTarjetaComponent, MenuClienteComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing funcion obtener_total que obtiene la cantidad de dinero a gastar', () => {
    pagoService = new PagoService();
    component.carrito = [];
    component.carrito = pagoService.obtener_carrito();
    expect(component.Obtener_Total()).toBe(80);
  });

 it('Testing funcion Funcion_generar, que generar codigos alfanumericos', () =>{
    let resultado = component.Funcion_Generar();
    expect(resultado).not.toBeUndefined();
    //expect(resultado.length).toBe(8);
  });

  it('Testing funcion Dividir tarjeta, lo que hace es obtener la lista del carrito y asignar un valor alfanumerico a cada una', () =>{
    pagoService = new PagoService();
    component.carrito = pagoService.obtener_carrito();
    component.pago.no_tarjeta = 1234567891234567;
    component.Dividir_Tarjetas();
    expect(component.pago.tarjetas.length).toBe(5);
    expect(component.pago.tarjetas[0].value).toBe(25);
    expect(component.pago.tarjetas[0].tipo_giftcard).toBe(5);

  })

 it("Prueba funcion encriptar tarjeta", ()=>{
    component.pago.no_tarjeta = 1234567891234567;
    let resultado = component.Encriptar();
    expect(resultado).toBe('1234XXXXXXXX4567')
  });

});
