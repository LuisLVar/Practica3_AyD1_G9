import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}


export class Login{
  inputEmail: ElementFinder;
  inputPassword: ElementFinder;
  btnSesion: ElementFinder;

  constructor(){
    this.inputEmail = element(by.id('inputEmail'));
    this.inputPassword = element(by.id('inputPassword'));
    this.btnSesion = element(by.id('btnSesion'));
  }

  // move to login
  async navigateTo(){
    await browser.get(`${browser.baseUrl}login`);
  }

  async setValuesLogin(email: string, pass: string){
    await this.inputEmail.sendKeys(email);
    await this.inputPassword.sendKeys(pass);
  }

}


export class Registro{
  inputNombre: ElementFinder
  inputApellido: ElementFinder;
  inputEmail: ElementFinder;
  inputUsername: ElementFinder;
  inputPass: ElementFinder;
  inputDpi: ElementFinder;
  inputFecha: ElementFinder;
  btnRegistro: ElementFinder;
  
  
  constructor(){
    this.inputNombre = element(by.id('nombre'));
    this.inputApellido = element(by.id('apellido'));
    this.inputEmail = element(by.id('email'));
    this.inputUsername = element(by.id('username'));
    this.inputPass = element(by.id('password'));
    this.inputDpi = element(by.id('dpi'));
    this.inputFecha = element(by.id('fecha'));
    this.btnRegistro = element(by.id('btnRegistro'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}registro`);
  }

  async setValues(
    nombre: string, apellido: string, email: string, username: string, password: string,
    dpi: string, fecha: Date
  ){
    this.inputNombre.sendKeys(nombre);
    this.inputApellido.sendKeys(apellido);
    this.inputEmail.sendKeys(email);
    this.inputUsername.sendKeys(username);
    this.inputPass.sendKeys(password);
    this.inputDpi.sendKeys(dpi);
    this.inputFecha.sendKeys(fecha.toDateString());
  }

}

export class Compra_Tarjetas{
  name: ElementFinder;
  cantidad: ElementFinder;
  seleccion: ElementFinder;
  btnGuardar: ElementFinder;
  compra_tarjeta: ElementFinder;

  constructor(){
    this.name = element(by.id('name'));
    this.cantidad = element(by.id('cantidad'));
    this.seleccion = element(by.id("seleccion"));
    this.btnGuardar = element(by.id("btnGuardar"));
    this.compra_tarjeta = element(by.id("compra_tarjeta"));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}compra-giftcards`);
  }

  async setValues(name: string, cantidad: number, precio: number){
    await this.name.sendKeys(name);
    await this.cantidad.sendKeys(cantidad);
    await this.seleccion.sendKeys(precio);
  }

}