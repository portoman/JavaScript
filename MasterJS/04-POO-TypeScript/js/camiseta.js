"use strict";
//Interface: Las clases que implementen la interface tiene que aplicar el contenido de esta. Como en Java
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sudadera = exports.Camiseta = void 0;
//Decorador: Añade características a una clase, en este caso un método. ##Indica que esta función se va a eliminar en nuevas actualizaciones
/*function estampar(logo:string){
return function(target:Function){
    target.prototype.estampacion=function():void{
        console.log("Camiseta estampada con el logo de: "+logo);
    }
}
}*/
//Clase (molde del objeto)
//@estampar('Lacoste')
var Camiseta = /** @class */ (function () {
    //Constructores
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Métodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    ;
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (color) {
        this.modelo = this.modelo;
    };
    ;
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    ;
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    ;
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    ;
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
/*
var camiseta1=new Camiseta();

camiseta1.setColor("Rojo");
camiseta1.setModelo("Manga corta");
camiseta1.setMarca("Adidas");
camiseta1.setTalla("L");
camiseta1.setPrecio(5);

console.log(camiseta1);*/
var camiseta2 = new Camiseta("Azul", "Manga larga", "Nike", "XL", 20);
console.log(camiseta2);
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(color, modelo, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    ;
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
exports.Sudadera = Sudadera;
var sudadera1 = new Sudadera("Verde", "Sin manga", "Reebok", "M", 20, true);
console.log(sudadera1);
