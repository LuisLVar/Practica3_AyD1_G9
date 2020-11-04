import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador/administrador.service';

@Component({
  selector: 'app-transac',
  templateUrl: './transac.component.html',
  styleUrls: ['./transac.component.css']
})
export class TransacComponent implements OnInit {

  transacciones: any;

  constructor(private adminService : AdministradorService, private router: Router) { }


  ngOnInit(): void {
    this.getTransacciones();
  }

  getTransacciones() { 
    this.adminService.getTransacciones().subscribe(
      res => {
        this.transacciones = res;
        console.log(this.transacciones);
      },
      err => console.log(err)
    );
  }

  cerrarSesion() { 
    var r = confirm("Seguro que quieres cerrar sesion?");
    console.log(r);
    if (r) {
      localStorage.setItem('usuario', JSON.stringify([]));
      this.router.navigate(['/login']);
    } 
  }


}
