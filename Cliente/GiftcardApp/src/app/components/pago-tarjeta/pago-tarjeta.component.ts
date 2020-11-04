import { Component, OnInit } from '@angular/core';
import {Carro, Pago, Tarjeta} from '../../models/pagos.interface';
import { CompraGiftcardsService } from '../../services/compras-gitcards/compra-giftcards.service';
import {Log} from '../../models/usuario';

@Component({
  selector: 'app-pago-tarjeta',
  templateUrl: './pago-tarjeta.component.html',
  styleUrls: ['./pago-tarjeta.component.css']
})
export class PagoTarjetaComponent implements OnInit {


  public carrito: Array<Carro> = [];

  public check: any = {
    value1: '1'
  }

  public total: number = 0;

  public pago: Pago = {};

  public codigo: boolean = false;
  public usuario: Log;

  constructor(private compraService: CompraGiftcardsService) { }

  ngOnInit(): void {
    this.getUser();
    this.Obtener_Carrito();
    this.check.value1 = '1';
    this.pago.total =  this.Obtener_Total();
  }

  getUser(): void{
    this.usuario = <Log>JSON.parse(localStorage.getItem('usuario'));
    if(this.usuario == null){
      this.usuario = {id:0}
    }
  }


  Obtener_Carrito(){
    this.carrito = JSON.parse(localStorage.getItem('carro'));
    localStorage.removeItem('carro');
    //console.log(this.carrito);
  }

  Obtener_Total(): number{
    for (let index = 0; index < this.carrito?.length; index++) {
        const element = this.carrito[index];
        this.total = this.total + element.total;
    }
    return this.total;
  }

  // Todo cambiar el codigo del dueño
  Dividir_Tarjetas(){
    this.Encriptar();
    this.pago.tarjetas = [];
    for (let index = 0; index < this.carrito?.length; index++) {
      const e = this.carrito[index];
      let cantidad = e.cantidad;
      for (let i = 0; i < cantidad; i++) {
        let tarjeta: Tarjeta = {
          // TODO: OBTENER EL ID DEL USUARIO EN SESION
          duenio: this.usuario.id,
          tipo_giftcard: e.tipo_giftcard,
          value: e.precio,
          codigo: this.Funcion_Generar()
        }
        this.pago.tarjetas.push(tarjeta);
      }
    }
    console.log(this.pago);
    //console.log(this.pago.no_tarjeta);
    this.Comprar_tarjeta();
  }

  Comprar_tarjeta(){
    this.compraService.Comprar(this.pago).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
  
  Verificar_Numero(object: any ){
    if(object.length === object.maxLength){
      console.log('Numero valido');
    }else {
      console.log('Numeo invalido ')
    }
  }

  Funcion_Generar(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  Encriptar(){
    var codiogS = this.pago.no_tarjeta.toString();
    
    var nuevo = ''
    for (let index = 0; index < codiogS.length; index++) {
      if(index < 4 || index >= 12){
        nuevo = nuevo + codiogS[index];
      }else if(index >= 4  && index <= 11){
        nuevo= nuevo + 'X';
      }
      
    }
    this.pago.no_tarjeta = nuevo;
    return nuevo;
  }

}
