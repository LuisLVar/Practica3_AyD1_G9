import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTarjetaComponent } from './pago-tarjeta.component';

describe('PagoTarjetaComponent', () => {
  let component: PagoTarjetaComponent;
  let fixture: ComponentFixture<PagoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoTarjetaComponent ]
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
});
