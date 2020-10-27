import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './components/login/login.component';




import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';
import {CompraGiftcardsService} from '../app/services/compras-gitcards/compra-giftcards.service';
import { PagoTarjetaComponent } from './components/pago-tarjeta/pago-tarjeta.component';
import { HistorialCompraComponent } from './components/historial-compra/historial-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    LoginComponent,
    CompraGiftcardsComponent,
    PagoTarjetaComponent,
    HistorialCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CompraGiftcardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
