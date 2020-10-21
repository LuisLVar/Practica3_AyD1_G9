import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';
import { PagoTarjetaComponent } from './components/pago-tarjeta/pago-tarjeta.component';

const routes: Routes = [
  {
    path: 'compra-giftcards',
    component: CompraGiftcardsComponent
  },
  {
    path: 'pago',
    component: PagoTarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
