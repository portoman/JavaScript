"use strict";

/*
Mostrar todos los numeros divisores de un número introducido   

*/

var numero = Number(prompt("Escribe un número", 0));

for(var i=numero;i>0; i--){
    if(numero%i==0){
        document.write(i+" es divisor de "+numero+ "<br/>");
    }
}


 