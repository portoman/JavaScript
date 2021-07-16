"use strict"

//Operadores

var numero1=7;
var numero2=12;

var operacion= numero1+numero2;

console.log("El resultado de la operación es: "+operacion);

//Tipos de datos

var numero_entero=4;
var StringData="Hola 'que' tal";

console.log(StringData);

var booleanData=false;

var numero_falso="33.4";

console.log(numero_falso+4);

console.log(Number(numero_falso)+4);//Función Number para convertir String a number

console.log(parseInt(numero_falso)+4);//Función ParseInt para convertir un dato en entero

console.log(parseFloat(numero_falso)+4);//Función ParseFloat para convertir un dato en float

console.log(String(numero_entero)+4);//Función String para convertir un dato en String

numero_entero.toString;//Método .toString tb convierte el dato en String

//Typeof-> Para saber el tipo de dato

console.log(typeof numero_entero);
console.log(typeof booleanData);
console.log(typeof numero_falso);

