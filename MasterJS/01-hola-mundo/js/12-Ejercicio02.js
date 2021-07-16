"use strict";

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado

*/

var suma=0;
var contador=0;


do{
var numero = Number(prompt("Escribe un número", 0));

if(isNaN(numero)){
    continue;
}else if(numero>=0){
    suma+=numero;
    contador++;
    var media=suma/contador;
    alert("La suma es: "+ suma);
    alert("La media es: "+ media);
}
}
while(numero>=0);
    
    

