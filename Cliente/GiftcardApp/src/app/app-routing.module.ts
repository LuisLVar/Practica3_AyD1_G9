import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraGiftcardsComponent } from './components/compra-giftcards/compra-giftcards.component';

const routes: Routes = [
  {
    path: 'compra-giftcards',
    component: CompraGiftcardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
