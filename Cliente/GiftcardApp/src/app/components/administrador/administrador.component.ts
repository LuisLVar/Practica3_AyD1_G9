import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private tarifaService: TarifaService) { }

  ngOnInit(): void {
    this.mostrarTarifa();
  }

  mostrarCatalogo() { 
    
  }

  mostrarTarifa() { 
    let x = this.tarifaService.getTarifa();
    console.log(x);
  }

}
