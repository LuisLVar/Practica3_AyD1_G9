import { Component, OnInit } from '@angular/core';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';

import {Card, Value} from '../../models/card.interface';

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
  constructor(private compraService: CompraGiftcardsService) { }

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
    this.Buscar_precios();
  }

  // Verificar si ya se agrego a la lista
  Verificar_Existencia(): boolean{
    if(this.carrito.filter( e => e.id === this.giftcard.id).length >0){
      // existe 
      let index = this.carrito.findIndex(e => e.id === this.giftcard.id);
      this.giftcard = this.carrito[index];
      console.log(this.giftcard);
      this.cantidad = this.giftcard.cantidad;
      return true;
    }
    return false;
  }

  Buscar_precios(){
    console.log(this.giftcard);
    var precios = [];
    this.lista_precio.forEach(element => {
      var index = this.giftcard.availability.find( e => e == element.id);
      if(index != undefined){
        precios.push(element.total);
      }
    });
    this.precios_tarjeta = precios;
  }

  Guardar_Compra_Tarjeta(){
    let tarjeta = {
      name: this.giftcard.name,
      cantidad: this.cantidad,
      total: this.cantidad * this.precio,
      tipo_giftcard : this.giftcard.id
    }
    this.carrito.push(tarjeta);
  }
}
