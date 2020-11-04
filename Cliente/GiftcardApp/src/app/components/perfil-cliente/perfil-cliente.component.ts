import { Component, OnInit } from '@angular/core';
import {Log} from '../../models/usuario';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  public usuario: Log;

  constructor() { }

  ngOnInit(): void {
    this.get_user();
  }

  get_user(){
    this.usuario = <Log> JSON.parse(localStorage.getItem('usuario'));
    if(this.usuario == null){
      this.usuario = {nombres: 'prueba', apellidos: 'prueba', username: "prueba"}
    }
  }

}
