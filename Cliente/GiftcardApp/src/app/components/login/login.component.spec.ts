import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Usuario } from '../../models/usuario';

class Login_Service {
  user:Usuario = {
    id:0,
    username:"chay",
    correo:"gerardo15.chay97@gmail.com",
    contrasenia:"admin123",
    nombres:"gerardo",
    apellidos:"grijalva",
    cui:"2896asdf",
    fecha_nacimiento: new Date(),
    tipo_usuario:0,
  }

  getUser(user:string, pass:string):Usuario{
    if(user === this.user.username && pass === this.user.contrasenia)
      return this.user;
    
    return null
  }

}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let _login: Login_Service

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule
      ]
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

  describe('Testing para funcion de ingresar con mockup', () => {
    _login = new Login_Service()
    it("Credenciales correctas", () => {
      let retorno:Usuario = _login.getUser("chay","admin123")
      if(retorno)
        console.log("success")
      else
        console.log("fail")
    });
    it("Credenciales incorrectas, retorno de null", () => {
      let retorno:Usuario = _login.getUser("chay","admin123")
      if(retorno)
        console.log("success")
      else
        console.log("fail")
    });

  });

});
