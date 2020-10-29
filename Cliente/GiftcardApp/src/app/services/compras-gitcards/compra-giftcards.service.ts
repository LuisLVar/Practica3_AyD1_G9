import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card, Value} from '../../models/card.interface';
@Injectable({
  providedIn: 'root'
})
export class CompraGiftcardsService {

  constructor(private http: HttpClient) { }
  
  API_URI = 'https://my-json-server.typicode.com/CoffeePaw/AyD1API';

  getCards (){
    return this.http.get<Array<Card>>(this.API_URI+'/Card');
  }

  getPrecio(){
    return this.http.get<Array<Value>>(`${this.API_URI}/Value`);
  }

}
