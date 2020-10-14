import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing para variables globales Login', () => {
    it("Prueba para user, debe ser '' ", () => {
      expect(component.user).toEqual('');
    });
    it("Prueba para pass, debe ser '' ", () => {
      expect(component.pass).toEqual('');
    });
  });

  describe('Testing a funcion resetVal()', () => {
    it("La variable user tiene que contener '' luego de llamar a la función", () => {
      component.user = 'Chay'
      const auxUser  = 'Chay'
      component.resetVal();
      expect(auxUser).not.toBe(component.user);
    });
    it("La variable pass tiene que contener '' luego de llamar a la función", () => {
      component.pass = '345Ing'
      const auxPass  = ''
      component.resetVal();
      expect(auxPass ).toBe(component.user);
    });
  });

});
