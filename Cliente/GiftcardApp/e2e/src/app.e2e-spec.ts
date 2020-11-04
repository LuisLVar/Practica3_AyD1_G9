import { AppPage, Login, Compra_Tarjetas } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let _login: Login;
  let _compra: Compra_Tarjetas;


  beforeEach(() => {
    page = new AppPage();
    _login = new Login();
    _compra = new Compra_Tarjetas();
  });

  /* it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('GiftcardApp app is running!');
  }); */

  it("Inicio de sesion satisfactorio" ,() =>{
    _login.navigateTo();
    _login.setValuesLogin("feliciano07", "123456");
    expect(_login.inputEmail.getAttribute('value')).toEqual('feliciano07');
    expect(_login.inputPassword.getAttribute('value')).toEqual('123456')
    _login.btnSesion.click();
  })

  it("Inicio de sesion fallado", () => {
    _login.navigateTo();
    _login.setValuesLogin("feliciano07", "123456");
    expect(_login.inputEmail.getAttribute('value')).toEqual('felix');
    expect(_login.inputPassword.getAttribute('value')).toEqual('123456')
    _login.btnSesion.click();
  })

/*   it("Seleccion de tarjeta carrito", ()=>{
    _compra.navigateTo();
    _compra.compra_tarjeta.click();
    _compra.setValues("PlayStation", 10, 50);
    expect(_compra.name.getAttribute('value')).toBe('PlayStation');
    expect(_compra.cantidad.getAttribute('value')).toBe(10);
    expect(_compra.seleccion.getAttribute('value')).toBe(50);
    _compra.btnGuardar.click();
  }) */

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
