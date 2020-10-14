import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = ''
  pass:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  resetVal(){
    this.user=''
    this.pass=''
  }

  ingresar(){
    if(this.user === ''){
      console.log("Ingrese usuario o correo","Dato requerido")
    }
    else if(this.pass === ''){
      console.log("Ingrese contraseña","Dato requerido")
    }
    else{

    }
  }
}
