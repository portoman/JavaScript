"use strict";

/*
Funciones-> Es una agrupación reutilizable de un conjunto de intrucciones
*/

function calculadora(){
    return "Hola";
}

console.log(calculadora());

//Funciones con parámetros

function calculadora2(x,y){
    console.log("Suma: "+(x+y));
    console.log("Resta: "+(x-y))
    console.log("Multiplicación: "+(x*y))
    console.log("División: "+(x/y))
}

calculadora2(2,3);

//Parámetros opcionales-> Se pueden definir o no

function calculadora3(x,y, mostrar=false){
    console.log("Suma: "+(x+y));
    console.log("Resta: "+(x-y)+mostrar)
    console.log("Multiplicación: "+(x*y))
    console.log("División: "+(x/y))
}

calculadora3(2,3);

//Funciones dentro de otras

function suma(x,y){
    return x+y;
}
function resta(x,y){
    return x-y;
}

function calculadora4(x, y){
    console.log(suma(x,y));
    console.log(resta(x,y));
}
console.log(calculadora4(4,2));

//Parámetros Rest y Spread

function listadoFrutas(fruta1, fruta2, ...REST){//Rest
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(REST);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melón", "Coco")

var spread=["Naranja", "Fresa"];

listadoFrutas(...spread,  "Sandia", "Pera", "Melón", "Coco")//Spread