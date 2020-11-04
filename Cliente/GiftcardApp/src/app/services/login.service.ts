import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Log} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/user';
  
  constructor(private http: HttpClient) { }

  logIn = (loguearse:any):Observable<Log> => this.http.post<Log>(`${this.API_URI}/login`,loguearse)
}
