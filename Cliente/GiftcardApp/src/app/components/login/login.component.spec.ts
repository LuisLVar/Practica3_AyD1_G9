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
    it("Prueba para message, tiene que ser definido ", () => {
      expect(component.pass).toBeUndefined();
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

  describe('Testing a funcion ingresar()', () => {
    it("Si las variables user y pass se encuentran vacia, message lanza mensaje de error ", () => {
      component.ingresar();
      expect(component.message).not.toBe('');
    });
    it("Si la variable user se encuentran vacia, message lanza mensaje de warning", () => {
      component.ingresar();
      expect(component.message).toBe("Ingrese usuario o correo "+"Dato requerido");
    });
    it("Si la variable pass se encuentran vacia, message lanza mensaje de warning", () => {
      component.ingresar();
      expect(component.message).toEqual("Ingrese contraseña "+"Dato requerido");
    });
    it("Si, todo es correcto se llama a los datos", () => {
      component.user = 'chay'
      component.pass = 'admin123'
      component.ingresar();
      expect(component.message).not.toBe('');
    });
  });

});
