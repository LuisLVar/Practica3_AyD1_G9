import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LoginComponent } from './components/login/login.component';
import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';
import {CompraGiftcardsService} from '../app/services/compras-gitcards/compra-giftcards.service';
import { PagoTarjetaComponent } from './components/pago-tarjeta/pago-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    AdministradorComponent,
    LoginComponent,
    CompraGiftcardsComponent,
    PagoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CompraGiftcardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
