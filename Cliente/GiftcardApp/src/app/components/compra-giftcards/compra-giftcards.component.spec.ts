import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraGiftcardsComponent } from './compra-giftcards.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Card, Value } from 'src/app/models/card.interface';
import { ThrowStmt } from '@angular/compiler';


class CompraGiftcardsService{
  tarjetas:Array<Card> = [
    {
      id: '2',
      name: 'PlayStation',
      image: "https://www.allkeyshop.com/blog/wp-content/uploads/PlayStationNetworkGiftCard.jpg",
      active: true,
      chargeRate: 0.25,
      availability:[1,2,3]
    }
  ];

  precios:Array<Value> = [
    {id: 1, total: 10},
    {id: 2, total: 25},
    {id: 3, total: 50},
    {id: 4, total: 100}
  ]

  getCards(): any{
    return this.tarjetas;
  }

  getValue(): any {
    return this.precios;
  }

}


describe('CompraGiftcardsComponent', () => {
  let component: CompraGiftcardsComponent;
  let fixture: ComponentFixture<CompraGiftcardsComponent>;
  let compraService: CompraGiftcardsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraGiftcardsComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraGiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Mock', ()=>{
    it('Validar Lista obtenido mocks', ()=>{
      compraService = new CompraGiftcardsService();
      let items = compraService.getCards();
      expect(items[0].name).toEqual("PlayStation");
    });
  });

  describe('Testing buscar_precios', () =>{
    it('Verificar que se obtengan los precios correctos de cada tarjeta', () =>{
      compraService = new CompraGiftcardsService();
      let tarjetas = compraService.getCards();
      let precios = compraService.getValue();
      component.giftcard = tarjetas[0];
      component.lista_precio = precios;
      let respuesta =component.Buscar_precios();
      expect(respuesta[0]).toBe(10);
      expect(respuesta[1]).toBe(25);
      expect(respuesta[2]).toBe(50);
    });
  });

  describe('Testing funcion obtener_giftcard', ()=>{
    it('Verificar que se asigne valor a this.gitcard', ()=>{
      compraService = new CompraGiftcardsService();
      let tarjetas = compraService.getCards();
      component.Obtener_GiftCard(tarjetas[0]);
      expect(component.giftcard.id).toEqual("2");
      expect(component.giftcard.name).toEqual("PlayStation");
    });
  });

  describe('Testing funcion guardar_compra_tarjeta', () =>{
    it('Verificar que se guarden las compras realizas de tarjetas', ()=>{
      compraService = new CompraGiftcardsService();
      let tarjetas = compraService.getCards();
      component.giftcard = tarjetas[0];
      component.cantidad = 5;
      component.precio = 10;
      component.Guardar_Compra_Tarjeta();
      expect(component.carrito).toEqual(
        [
          {
            name: 'PlayStation',
            cantidad: 5,
            total: 50,
            tipo_giftcard: '2'
          }
        ]
      )
    })
  })

});
