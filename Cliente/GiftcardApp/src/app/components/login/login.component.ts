import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = ''
  pass:string = ''
  message:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  resetVal(){
    this.user=''
    this.pass=''
  }

  ingresar(){
    if(this.user === '' && this.pass === ''){
      this.message = "Ingrese usuario o correo "+"Dato requerido"
    }
    else if(this.user === ''){
      this.message = "Ingrese usuario o correo "+"Dato requerido"
    }
    else if(this.pass === ''){
      this.message = "Ingrese contraseña "+"Dato requerido"
    }
    else{
      this.message = 'success'
      this.resetVal()
    }
  }
}
