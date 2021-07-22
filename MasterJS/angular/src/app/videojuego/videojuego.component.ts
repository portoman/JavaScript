import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
//Hook, interface OnInit: Se ejecuta al inicio
//Hook, interface Docheck: Se ejecuta cuando hay un cambio, por ejemplo un click
//Hook OnDestroy: Se ejecuta cuando se decide eliminar un componente

@Component({
    selector: 'videojuego',//Etiqueta en html
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo="Componente de Videojuegos";
        this.listado="Listado de los juegos más populares:";
       // console.log("Se ha cargado el componente: videojuego.component.ts");
    }
    ngOnInit(){
        //console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }
    
    ngOnDestroy(){
       // console.log("OnDestroy ejecutado");
    }


    cambiarTitulo(){
        this.titulo="Nuevo titulo del componente";
    }

}