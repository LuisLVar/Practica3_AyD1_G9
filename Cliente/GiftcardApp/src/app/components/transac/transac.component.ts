import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador/administrador.service';

@Component({
  selector: 'app-transac',
  templateUrl: './transac.component.html',
  styleUrls: ['./transac.component.css']
})
export class TransacComponent implements OnInit {

  transacciones: any;

  constructor(private adminService : AdministradorService) { }


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


}
