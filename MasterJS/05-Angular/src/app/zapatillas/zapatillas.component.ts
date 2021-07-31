import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]//Incrustando el servicio
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';

  public marcas: String[];
  public color: string;
  public mi_marca: string;
  public zapatillas: Array<Zapatilla>;

  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.mi_marca = 'Kappa';
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = new Array();
  }
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();

    this.zapatillas=this._zapatillaService.getZapatillas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      //Condición para no meter "marcas" repetidas: indexOf devuelve -1 si no se encuentra el elemento en el array
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
      console.log(index);
    });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(indice: number) {
    this.marcas.splice(indice, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }

  mostrarPalabra() {
    alert(this.mi_marca);
  }
}
