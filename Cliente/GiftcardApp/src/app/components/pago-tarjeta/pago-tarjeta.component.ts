import { Component, OnInit } from '@angular/core';

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

  public total: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.Funcion_Generar());
    this.Obtener_Carrito();
    this.check.value1 = '0';
    this.Obtener_Total();
  }


  Obtener_Carrito(){
    this.carrito = JSON.parse(localStorage.getItem('carro'));
    localStorage.removeItem('carro');
  }

  Obtener_Total(){
    this.carrito.forEach(element => {
        this.total += element.total;
    });
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

}
