import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service'
import { Usuario } from '../../models/usuario'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:Usuario={
    id:'',
    correo:'',
    password:'',
    nombre:'',
    apellido:'',
    dpi:0,
    edad:0,
    tarjetas:[],
    transaccion:[]
  }

  constructor(private _register:RegistroService) { }

  ngOnInit(): void {
  }

  registrar(){

  }
}
