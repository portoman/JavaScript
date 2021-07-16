"use strict";

/*
Calculadora:
    -Pedir 2 números por pantalla
    -Si metemos mal los números que nos los pida otra vez
    -En el cuerpo de la página nos muestre el resultado de 
    sumar, restar, dividir y multiplicar esos 2 números 
*/

do{

    var numero1 = parseFloat(prompt("Escribe el primer número", 0));
    var numero2 = parseFloat(prompt("Escribe el segundo número", 0));

    }while(isNaN(numero1) || isNaN(numero2));

    document.write("La suma es: "+(numero1+numero2)+" <br/>");
    document.write("La resta es: "+(numero1-numero2)+" <br/>");
    document.write("La multiplicación es: "+(numero1*numero2)+" <br/>");
    document.write("La división es: "+(numero1/numero2)+" <br/>");