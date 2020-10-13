import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraGiftcardsComponent } from './compra-giftcards.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


class CompraGiftcardsService{
  tarjetas:any = [
    {
      id: "2",
      name: "PlayStation",
      image: "https://www.allkeyshop.com/blog/wp-content/uploads/PlayStationNetworkGiftCard.jpg",
      chargeRate: 0.25,
      availability: [
        1,
        2,
        3
      ]
    }
  ];

  getCards(): any{
    return this.tarjetas;
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

  describe('Testing Listar_Tarjetas', ()=>{
    it('Validar Lista obtenido', ()=>{
      compraService = new CompraGiftcardsService();
      let items = compraService.getCards();
      expect(items[0].name).toEqual("PlayStation");
    })
  })
});
