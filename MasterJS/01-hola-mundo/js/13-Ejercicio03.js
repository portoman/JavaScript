"use strict";

/*
    Hacer un programa que muestre todos los numeros entre 2 números introducidos por un usuario

*/


var numero1 = Number(prompt("Escribe un número", 0));
var numero2 = Number(prompt("Escribe otro número", 0));

document.write("<h1>De"+numero1+" a "+numero2+" están estos números:</h1>")

var diferencia=Math.abs(numero1-numero2)-1;

var numeroMayor;
if(numero1>=numero2){
    numeroMayor=numero1;
}else{
    numeroMayor=numero2;
};

for(var i=0; i<diferencia;i++){
    document.write(numeroMayor-diferencia+i+"<br/>");
}

/*
Manera mejor:
var numero1 = Number(prompt("Escribe un número", 0));
var numero2 = Number(prompt("Escribe otro número", 0));

document.write("<h1>De"+numero1+" a "+numero2+" están estos números:</h1>")
for(var x=numero1;x<=numero2;i++){
    document.write(i+"<br/>")
}
*/ 