import { Component, OnInit } from '@angular/core';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';

import {Card, Value} from '../../models/card.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compra-giftcards',
  templateUrl: './compra-giftcards.component.html',
  styleUrls: ['./compra-giftcards.component.css']
})
export class CompraGiftcardsComponent implements OnInit {

  public lista: Array<Card> = [];
  public lista_precio:Array<Value>= [];
  public giftcard : any = {};

  public precios_tarjeta: any;

  public cantidad: number = 0;
  public precio: number = 0;
  
  public carrito: any = [];
  constructor(private compraService: CompraGiftcardsService, private router: Router) { }

  ngOnInit(): void {
    this.listar_Tarjetas();
    this.listar_Precios();
  }
  //TODO: hace falta manejar los precios si los muestro o no
  listar_Tarjetas(){
    this.compraService.getCards().subscribe(
      res => {
        this.lista = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

  listar_Precios(){
    this.compraService.getPrecio().subscribe(
      res => {
        this.lista_precio = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  Obtener_GiftCard(item: any){
    this.giftcard = item;
    this.cantidad = 0;
    this.precios_tarjeta = this.Buscar_precios();
  }



  Buscar_precios(): any{
    //console.log(this.giftcard);
    var precios = [];
    this.lista_precio.forEach(element => {
      var index = this.giftcard.availability.find( e => e == element.id);
      if(index != undefined){
        precios.push(element.total);
      }
    });
    return precios;
  }

  Guardar_Compra_Tarjeta(){
    let tarjeta = {
      name: this.giftcard.name,
      cantidad: this.cantidad,
      total: this.cantidad * this.precio,
      tipo_giftcard : this.giftcard.id
    }
    this.carrito.push(tarjeta);
    console.log(this.carrito)
  }

  Navegar(){
    localStorage.setItem('carro', JSON.stringify(this.carrito));
    this.router.navigate(['/pago']);
  }
}
