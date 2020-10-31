import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card, Historial, Value} from '../../models/card.interface';
import { Pago } from 'src/app/models/pagos.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompraGiftcardsService {

  constructor(private http: HttpClient) { }
  
  API_URI = 'https://my-json-server.typicode.com/CoffeePaw/AyD1API';
  API_URI1 = 'http://localhost:3000/';

  getCards (){
    return this.http.get<Array<Card>>(this.API_URI+'/Card');
  }

  getPrecio(){
    return this.http.get<Array<Value>>(`${this.API_URI}/Value`);
  }

  Comprar(data: Pago){
    return this.http.post(`${this.API_URI1}/pago`, data);
  }

  History(data): Observable<Array<Historial>>{
    return this.http.post<Array<Historial>>(`${this.API_URI1}/historial`, data);
  }
}
