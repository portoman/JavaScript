import { Injectable } from "@angular/core";
import {Zapatilla} from '../models/zapatilla'

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
    this.zapatillas = [
        new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
        new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
        new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
        new Zapatilla('Puma Predator', 'Puma', 'Rojas', 150, true),
        new Zapatilla('Nike Evolution', 'Nike', 'Verdes', 70, true),
      ];
    };

    getTexto(){
        return "Hola Mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}