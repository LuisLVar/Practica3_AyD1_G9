import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Usuario} from '../../models/usuario';

class Registro_Service {
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

  getUser():Usuario{
    return this.user;
  }

  get_user_fail(): Usuario{
    this.user.correo = '';
    return this.user;
  }

}

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let _servic: Registro_Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("Registro correcto", ()=>{
    _servic = new Registro_Service();
    component.user = _servic.getUser();
    expect(component.user.apellidos).not.toBe('');
    expect(component.user.nombres).not.toBe('');
    expect(component.user.contrasenia).not.toBe('');
    expect(component.user.correo).not.toBe('');
    expect(component.user.cui).not.toBe('');
    expect(component.user.username).not.toBe('');
    expect(component.user.fecha_nacimiento).toEqual(new Date());
  });

  it("Registro fallido", ()=> {
    _servic = new Registro_Service();
    component.user = _servic.get_user_fail();
    expect(component.user.apellidos).not.toBe('');
    expect(component.user.nombres).not.toBe('');
    expect(component.user.contrasenia).not.toBe('');
    expect(component.user.correo).toBe('');
    expect(component.user.cui).not.toBe('');
    expect(component.user.username).not.toBe('');
    expect(component.user.fecha_nacimiento).toEqual(new Date());
  })


});
