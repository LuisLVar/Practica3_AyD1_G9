import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LoginComponent } from './components/login/login.component';
import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';
import { PagoTarjetaComponent } from './components/pago-tarjeta/pago-tarjeta.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component:  AdministradorComponent},
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
