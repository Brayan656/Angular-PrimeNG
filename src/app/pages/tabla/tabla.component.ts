import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['codigo', 'nombre', 'categoria', 'cantidad'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  codigo: number;
  nombre: string;
  categoria: string;
  cantidad: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nombre: 'Pasta', categoria: 'Alimento', cantidad: 30},
  {codigo: 2, nombre: 'Cuchara', categoria: 'Hogar', cantidad: 20}, 
  {codigo: 3, nombre: 'Camisa', categoria: 'Ropa', cantidad: 19},
  {codigo: 4, nombre: 'Manzanas', categoria: 'Alimento', cantidad: 40}   
];