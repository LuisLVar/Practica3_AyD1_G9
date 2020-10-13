import { Component, OnInit } from '@angular/core';
import {CompraGiftcardsService} from '../../services/compras-gitcards/compra-giftcards.service';

@Component({
  selector: 'app-compra-giftcards',
  templateUrl: './compra-giftcards.component.html',
  styleUrls: ['./compra-giftcards.component.css']
})
export class CompraGiftcardsComponent implements OnInit {

  public lista: any = [];
  public lista_precio:any  = [];
  public giftcard : any = {};

  public cantidad: number = 0;
  public precio: number = 0;
  
  public carrito = [];
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
      }
    );
  }

  listar_Precios(){
    this.compraService.getPrecio().subscribe(
      res => {
        this.lista_precio = res;
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

  Obtener_GiftCard(item: any){
    this.giftcard = item;
    this.Verificar_Existencia();
    this.Buscar_precio();
  }

  Verificar_Existencia(): boolean{
    if(this.carrito.filter( e => e.id === this.giftcard.id).length >0){
      // existe 
      let index = this.carrito.findIndex(e => e.id === this.giftcard.id);
      this.giftcard = this.carrito[index];
      this.cantidad = this.giftcard.cantidad;
      return true;
    }
    return false;
  }

  Buscar_precio(){
    if(this.lista_precio.filter( e => e.id === this.giftcard.id).length > 0){
      let index = this.lista_precio.findIndex(e => e.id === this.giftcard.id);
      this.precio = this.lista_precio[index].total;
    }
  }

  Guardar_Compra_Tarjeta():boolean{
    let tarjeta = {
      nombre: this.giftcard.name,
      id: this.giftcard.id,
      cantidad: this.cantidad,
      total: this.cantidad * this.precio
    }

    if(this.carrito.filter( e => e.id === this.giftcard.id).length > 0){
      // existe 
      let index = this.carrito.findIndex(e => e.id === this.giftcard.id);
      this.carrito[index] = tarjeta;
      console.log(this.carrito);
      return true;
    }else{
      //no existe
      this.carrito.push(this.carrito);
      console.log(this.carrito);
      return false;
    }
  }

}
