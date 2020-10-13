import { Component, OnInit } from '@angular/core';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';

@Component({
  selector: 'app-compra-giftcards',
  templateUrl: './compra-giftcards.component.html',
  styleUrls: ['./compra-giftcards.component.css']
})
export class CompraGiftcardsComponent implements OnInit {

  public lista: any = [];
  
  public getCards: boolean;

  constructor(private compraService: CompraGiftcardsService) { }

  ngOnInit(): void {
    this.listar_Tarjetas();
  }

  listar_Tarjetas(){
    this.compraService.getCards().subscribe(
      res => {
        this.lista = res;
        this.getCards = true;
      },
      err =>{
        this.getCards = false;
      }
    );
  }

}
