import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}

// pagina de compras-tarjetas 
export class CompraGiftcards{


  private tarjeta_prueba = {
    id: "1",
    name: "Google Play",
    image: "https://media.karousell.com/media/photos/products/2020/5/21/rm50_goggle_play_gift_card_mal_1590040469_c1100b5a_progressive.jpg",
    chargeRate: 1,
    active: false,
    availability: [
      1,
      2,
      4
    ]
  }

  btn_agregar: ElementFinder;
  label_name: ElementFinder;
  input_cantidad: ElementFinder;
  

  constructor(){
    this.btn_agregar = element(by.id('compra_tarjeta'));
  }

  async navigateTo(){
    await browser.get(`${browser.baseUrl}compra-giftcards`);
  }
}
