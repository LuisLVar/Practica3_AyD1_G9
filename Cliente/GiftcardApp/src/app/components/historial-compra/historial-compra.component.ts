import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/models/card.interface';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';
@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrls: ['./historial-compra.component.css']
})
export class HistorialCompraComponent implements OnInit {

  public historial: Array<Historial> = [];

  constructor(private compra: CompraGiftcardsService) { }

  ngOnInit(): void {
    this.Listar_compras();
  }

  Listar_compras(){
    //TODO: obtener el id del usuario en sesion
    var data = {
      id_usuario: 2
    }
    this.compra.History(data).subscribe(
      res => {
        this.historial = res;
      },
      err => {
        console.log(err);
      }
    )
  }
}
