import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api';
  API_URI2 = 'https://my-json-server.typicode.com/CoffeePaw/AyD1API/';

  getCatalogo() { 
    return this.http.get(`${this.API_URI}/giftcard`);
  }
}
