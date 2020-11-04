import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {Log} from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = '';
  pass:string = '';
  message:string = '';

  private user_logueado: Log;

  constructor(private _userService:LoginService, private router:Router) { }

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
      this._userService.logIn({user:this.user, password: this.pass}).subscribe(
        (res) => {
          this.user_logueado = res;
          localStorage.setItem('usuario', JSON.stringify(this.user_logueado));
          this.resetVal()
          if(this.user_logueado.tipo_usuario === 1){
            this.router.navigate(['/admin']);
          }else if (this.user_logueado.tipo_usuario === 2){
            this.router.navigate(['/compra-giftcards'])
          }
        },
        err => {
          console.error(err);
          this.resetVal()
        }
      )
    }
  }
}
