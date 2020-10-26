import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://3.20.3.133:3010/api';
  API_URI2 = 'https://my-json-server.typicode.com/CoffeePaw/AyD1API/';

  getCatalogo() { 
    return this.http.get(`${this.API_URI2}/Card`);
  }
}
