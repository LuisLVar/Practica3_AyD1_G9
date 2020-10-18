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

}
