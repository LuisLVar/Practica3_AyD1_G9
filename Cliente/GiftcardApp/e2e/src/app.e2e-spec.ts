import { AppPage, Login, Compra_Tarjetas, Registro } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let _login: Login;
  let _registro: Registro;

  browser.ignoreSynchronization = true;

  beforeEach(() => {
    page = new AppPage();
    _login = new Login();
    _registro = new Registro();
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

  it("registro de persona", ()=> {
    _registro.navigateTo();
    _registro.setValues("Fernando", "Chajon","fernando@gmail.com", "felix","123456","32182853", new Date());
    expect(_registro.inputNombre.getAttribute('value')).toBe("Fernando");
    expect(_registro.inputApellido.getAttribute('value')).toBe('Chajon');
    expect(_registro.inputEmail.getAttribute('value')).toBe('fernando@gmail.com');
    expect(_registro.inputDpi.getAttribute('value')).toBe('32182853');
    _registro.btnRegistro.click();
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
