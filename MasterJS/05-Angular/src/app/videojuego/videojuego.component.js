"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideojuegoComponent = void 0;
var core_1 = require("@angular/core");
//Hook, interface OnInit: Se ejecuta al inicio
//Hook, interface Docheck: Se ejecuta cuando hay un cambio, por ejemplo un click
//Hook OnDestroy: Se ejecuta cuando se decide eliminar un componente
var VideojuegoComponent = /** @class */ (function () {
    function VideojuegoComponent() {
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos más populares:";
        // console.log("Se ha cargado el componente: videojuego.component.ts");
    }
    VideojuegoComponent.prototype.ngOnInit = function () {
        //console.log("OnInit ejecutado");
    };
    VideojuegoComponent.prototype.ngDoCheck = function () {
        //console.log("DoCheck ejecutado");
    };
    VideojuegoComponent.prototype.ngOnDestroy = function () {
        // console.log("OnDestroy ejecutado");
    };
    VideojuegoComponent.prototype.cambiarTitulo = function () {
        this.titulo = "Nuevo titulo del componente";
    };
    VideojuegoComponent = __decorate([
        core_1.Component({
            selector: 'videojuego',
            templateUrl: './videojuego.component.html'
        })
    ], VideojuegoComponent);
    return VideojuegoComponent;
}());
exports.VideojuegoComponent = VideojuegoComponent;
