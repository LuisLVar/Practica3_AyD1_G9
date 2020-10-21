import { Component, OnInit } from '@angular/core';
import {Pago, Tarjeta} from '../../models/pagos.interface';

@Component({
  selector: 'app-pago-tarjeta',
  templateUrl: './pago-tarjeta.component.html',
  styleUrls: ['./pago-tarjeta.component.css']
})
export class PagoTarjetaComponent implements OnInit {
  public carrito: any = [];

  public check: any = {
    value1: '0'
  }

  public total: number = 0;

  public pago: Pago = {};

  constructor() { }

  ngOnInit(): void {
    this.Obtener_Carrito();
    this.check.value1 = '0';
    this.Obtener_Total();
  }


  Obtener_Carrito(){
    this.carrito = JSON.parse(localStorage.getItem('carro'));
    //console.log(this.carrito);
  }

  Obtener_Total(): number{
    for (let index = 0; index < this.carrito.length; index++) {
        const element = this.carrito[index];
        this.total = this.total + element.total;
    }
    return this.total;
  }

  // Todo cambiar el codigo del dueño
  Dividir_Tarjetas(){
    this.pago.tarjetas = [];
    for (let index = 0; index < this.carrito.length; index++) {
      const e = this.carrito[index];
      let cantidad = e.cantidad;
      for (let i = 0; i < cantidad; i++) {
        let tarjeta: Tarjeta = {
          duenio: 0,
          tipo_giftcard: parseInt(e.tipo_giftcard),
          value: parseInt(e.precio),
          codigo: this.Funcion_Generar()
        }
        this.pago.tarjetas.push(tarjeta);
      }
    }
    console.log(this.pago.tarjetas);
  }
  

  Funcion_Generar(){
    let result;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
