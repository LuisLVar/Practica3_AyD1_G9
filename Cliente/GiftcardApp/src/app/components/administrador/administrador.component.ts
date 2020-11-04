import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa/tarifa.service';
import { AdministradorService } from '../../services/administrador/administrador.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private tarifaService: TarifaService, private adminService : AdministradorService) { }

  ngOnInit(): void {
    // this.getTarifa();
    this.getCatalogo();
  }

  mostrarCatalogo() { 
    
  }

  tarifa: number = 0;

  catalogo: any;

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
}
