import { Component, OnInit } from '@angular/core';
import {Mis_Tarjetas} from '../../models/card.interface';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';

import {Log} from '../../models/usuario';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent implements OnInit {

  public mis_tarjetas: Array<Mis_Tarjetas> = [];
  public usuarios: any = [];
  public usuario_regalo: number;
  public tarjeta_regalo: Mis_Tarjetas = {};

  public user: Log;

  constructor(private http: CompraGiftcardsService) { }

  ngOnInit(): void {
    this.getUser();
    this.Listar_Tarjetas();
    this.Listar_usuarios();
  }

  getUser(): void{
    this.user = <Log>JSON.parse(localStorage.getItem('usuario'));
  }

  Listar_Tarjetas(){
    //TODO: cambiar el id del usuario por el logueado
    var data = {
      id_usuario: this.user.id
    };

    this.http.Mis_tarjetas(data).subscribe(
      res => {
        this.mis_tarjetas = res;
      }, 
      err =>{
        console.log(err);
      }
    )
  }

  Listar_usuarios(){
    //TODO: CAMBIAR EL ID 
    var data = {
      id_usuario: 2
    };
    this.http.usuario_regalo(data).subscribe(
      res => {
        this.usuarios = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  Obtener_Item(item:Mis_Tarjetas){
    this.tarjeta_regalo = item;
  }

  Enviar_Regalo(){
    var data = {
      giftcard: this.tarjeta_regalo.id,
      user: this.usuario_regalo
    }

    this.http.regalar(data).subscribe(
      res =>{
        console.log(res);
        this.Listar_Tarjetas();
        this.tarjeta_regalo = {};
        this.usuario_regalo = -1;
      },
      err => {
        console.log(err);
      }
    )

    console.log(data);
  }

}
