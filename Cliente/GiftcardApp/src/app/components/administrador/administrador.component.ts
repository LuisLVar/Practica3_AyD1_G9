import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa/tarifa.service';
import { AdministradorService } from '../../services/administrador/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private tarifaService: TarifaService, private adminService : AdministradorService, private router: Router) { }

  ngOnInit(): void {
    // this.getTarifa();
    this.getCatalogo();
  }

  mostrarCatalogo() { 
    
  }

  tarifa: number = 0;

  catalogo: any = [];

  getTarifa() { 
    this.tarifaService.getTarifa().subscribe(
      res => {
        this.tarifa = res[0].total;
      },
      err => { console.log(err)
      }
    );
  }

  getConversionTarifa(x: number) { 
    return x * this.tarifa;
  }

  getCatalogo() { 
    this.adminService.getCatalogo().subscribe(
      res => {
        this.catalogo = res;
        console.log(this.catalogo);
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
