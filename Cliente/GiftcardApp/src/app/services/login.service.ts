import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  logIn = (loguearse:any):Observable<any> => this.http.post(`${this.API_URI}/login`,loguearse)
}
