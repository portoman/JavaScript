"use strict";

//Transformación de textos

var numero=444;
var texto1="Bienvenido al curso de Js curso"
var texto2="es buen curso"

var dato=numero.toString();

console.log(typeof dato);

console.log(texto1.toUpperCase());
console.log(texto1.toLowerCase());

//Calcular longitud de texto

var nombre="11123515432";

console.log(nombre.length);

//Concatenar

var textoTotal=texto1+" "+texto2;
console.log(textoTotal);

var textoTotal2=texto1.concat(" "+texto2)

console.log(textoTotal2);

//Busquedas

var busqueda=texto1.indexOf("curso");
console.log(busqueda);

var busqueda2=texto1.lastIndexOf("curso");
console.log(busqueda2);

var busqueda3=texto1.search("curso");
console.log(busqueda3);

var busqueda4=texto1.match("curso");
console.log(busqueda4);

var busqueda5=texto1.substr(14,5);
console.log(busqueda5);

var busqueda6=texto1.charAt(14);
console.log(busqueda6);

var busqueda7=texto1.includes("cur");
console.log(busqueda7);

//Reemplazo

texto1=" Bienvenido al curso de Js curso "
texto2="es buen curso"

var reemplazo=texto1.replace("al","to");
console.log(reemplazo);

var reemplazo2=texto1.slice(14,25);
console.log(reemplazo2);

var reemplazo3=texto1.split(" ");
console.log(reemplazo3);

var reemplazo4=texto1.trim();
console.log(reemplazo4);