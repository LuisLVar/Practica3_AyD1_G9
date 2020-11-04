import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API_URI = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  registro = (nuevo:Usuario):Observable<any> => this.http.post(`${this.API_URI}/registro`,nuevo)
}
