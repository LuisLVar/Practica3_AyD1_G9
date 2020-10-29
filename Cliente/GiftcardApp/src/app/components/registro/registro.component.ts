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
    tipo_usuario: 0
  }

  constructor(private _register:RegistroService) { }

  ngOnInit(): void {
  }

  registrar(){
    delete this.user.id
    this._register.registro(this.user).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }
}
