import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  constructor(private http: HttpClient) { }

  getTarifa(){
    return this.http.get(`https://my-json-server.typicode.com/CoffeePaw/AyD1API/TasaCambio`);
  }

  tarifa: number;

  getTarifaSubscribe() { 
    this.getTarifa().subscribe(
      res => {
        this.tarifa = res[0].total;
        return this.tarifa;
      },
      err => { console.log(err)
        return 0;
      }
    );
  }

  getConversionTarifa(x: number) {  
    return x * 7.77;
  }



}
