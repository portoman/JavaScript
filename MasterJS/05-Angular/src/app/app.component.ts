import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Clase
export class AppComponent {

  //Atributos
  public title = 'Angular con Alfonso Porto';
  public descripcion: string;
  public mostrar_videojuegos: boolean=true;
  public config;

  //Importando propiedades de la clase Configuracion en el contructor
  constructor(){
  this.config=Configuracion;
  this.title=Configuracion.titulo;
  this.descripcion=Configuracion.descripcion;
  }
  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos=value;
  }
}
