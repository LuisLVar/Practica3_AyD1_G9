import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transac',
  templateUrl: './transac.component.html',
  styleUrls: ['./transac.component.css']
})
export class TransacComponent implements OnInit {

  transacciones: any;

  constructor() { }

  ngOnInit(): void {
  }

}
