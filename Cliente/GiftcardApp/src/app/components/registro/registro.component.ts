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
    id:0,
    username:'',
    correo:'',
    contrasenia:'',
    nombres:'',
    apellidos:'',
    cui:'',
    fecha_nacimiento: new Date(),
    tipo_usuario: 1
  }

  constructor(private _register:RegistroService) { }

  ngOnInit(): void {
  }

  registrar(){

  }
}
