import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';
import {CompraGiftcardsService} from '../app/services/compras-gitcards/compra-giftcards.service';

@NgModule({
  declarations: [
    AppComponent,
    CompraGiftcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CompraGiftcardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
