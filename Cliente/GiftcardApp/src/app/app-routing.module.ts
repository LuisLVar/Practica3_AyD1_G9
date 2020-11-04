import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LoginComponent } from './components/login/login.component';
import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';
import { PagoTarjetaComponent } from './components/pago-tarjeta/pago-tarjeta.component';
import { TransacComponent } from './components/transac/transac.component';
import {HistorialCompraComponent} from './components/historial-compra/historial-compra.component';
import {ListaTarjetasComponent} from './components/lista-tarjetas/lista-tarjetas.component';
import {PerfilClienteComponent} from './components/perfil-cliente/perfil-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdministradorComponent },
  { path: 'transac', component:  TransacComponent},
  {
    path: 'compra-giftcards',
    component: CompraGiftcardsComponent
  },
  {
    path: 'pago',
    component: PagoTarjetaComponent
  },
  {path: 'historial', component:HistorialCompraComponent },
  {path: 'tarjetas', component: ListaTarjetasComponent},
  {path: 'perfil', component: PerfilClienteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
