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