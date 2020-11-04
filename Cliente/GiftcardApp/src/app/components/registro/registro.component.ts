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
    correo:'',
    contrasenia:'',
    username:'',
    nombres:'',
    apellidos:'',
    cui:'',
    fecha_nacimiento: new Date(),
    tipo_usuario: 2
  }

  constructor(private _register:RegistroService) { }

  ngOnInit(): void {
  }

  registrar(){
    delete this.user.id
    this._register.registro(this.user).subscribe(
      res => {
        console.log(res)
        this.Limpiar();
        alert("Registro exitoso");
      }  ,
      err => console.error(err)
    )
  }

  Limpiar(){
    this.user.nombres = '';
    this.user.apellidos = '';
    this.user.contrasenia = '';
    this.user.correo = '';
    this.user.username = '';
    this.user.cui = '';

  }
}
