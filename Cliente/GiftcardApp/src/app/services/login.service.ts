import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Log} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/user';
  API_URI2 = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  logIn = (loguearse:any):Observable<Log> => this.http.post<Log>(`${this.API_URI}/login`,loguearse)

  sincronizar_tarjetas(){
    return this.http.get(`${this.API_URI2}/aux/sync`);
  }

  sincronizar_tasa(){
    return this.http.get(`${this.API_URI2}/aux/tasa`);
  }
}
