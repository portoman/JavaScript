"use strict";
//String o number (Multiples valores) La variable cadena puede ser string o number
var cadena = "Alfonso";
//number
var numero = 12;
//Booleano
var verdadero_falso = true;
//Any-> Para que no tenga tipado fuerte
var cualquiera = "hola";
//Array
var lenguajes = ["PHP", "JS", "Java"];
var years = [12, 13, 14];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
var letONum = "Porto";
//Let vs var
//Let->Definición a nivel local
//Var->Definición a nivel global 
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
module.exports = true;
