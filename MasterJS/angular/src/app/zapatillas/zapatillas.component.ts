import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.mi_marca="Kappa";
    this.color='yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
      new Zapatilla('Puma Predator', 'Puma', 'Rojas', 150, true),
      new Zapatilla('Nike Evolution', 'Nike', 'Verdes', 70, true),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
        //Condición para no meter "marcas" repetidas: indexOf devuelve -1 si no se encuentra el elemento en el array
        if(this.marcas.indexOf(zapatilla.marca)<0){
            this.marcas.push(zapatilla.marca);
        }
      console.log(index);
    });
    console.log(this.marcas);
  }
  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(indice: number){
     this.marcas.splice(indice,1);
  }

  onBlur(){
    console.log("Has salido del input");
  }

  mostrarPalabra(){
    alert(this.mi_marca);
  }
}
