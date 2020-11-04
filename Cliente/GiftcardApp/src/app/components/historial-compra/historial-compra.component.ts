import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/models/card.interface';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';
import {Log} from '../../models/usuario';
@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrls: ['./historial-compra.component.css']
})
export class HistorialCompraComponent implements OnInit {

  public historial: Array<Historial> = [];
  public usuario: Log;

  constructor(private compra: CompraGiftcardsService) { }

  ngOnInit(): void {
    this.getUser();
    this.Listar_compras();
  }
  
  getUser(): void{
    this.usuario = <Log>JSON.parse(localStorage.getItem('usuario'));
    //console.log(this.usuario);
  }

  Listar_compras(){
    //TODO: obtener el id del usuario en sesion
    var data = {
      id_usuario: this.usuario.id
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
