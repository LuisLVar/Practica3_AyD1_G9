import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa/tarifa.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private tarifaService: TarifaService) { }

  ngOnInit(): void {
    this.getTarifa();
  }

  mostrarCatalogo() { 
    
  }

  tarifa: number = 0;

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

}
