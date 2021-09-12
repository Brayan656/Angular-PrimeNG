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
  {codigo: 4, nombre: 'Manzana', categoria: 'Alimento', cantidad: 40}, 
  {codigo: 5, nombre: 'Tenis', categoria: 'Calzado', cantidad: 7}, 
  {codigo: 6, nombre: 'Balón', categoria: 'Deportes', cantidad: 21}, 
  {codigo: 7, nombre: 'Computador', categoria: 'Tecnologia', cantidad: 70}, 
  {codigo: 8, nombre: 'Jeans', categoria: 'Ropa', cantidad: 56}, 
  {codigo: 9, nombre: 'Pera', categoria: 'Alimento', cantidad: 40}   
];