"use strict"


/*
Operadores relacionales:

    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/


//Condicional IF

    var edad=6;
    var nombre="Alfonso Porto";

    if(edad>=18){
        console.log(nombre+" es mayor de edad");
        if(edad<=33){
            console.log("Todavía eres millenial");
        }else if(edad<=40){
            console.log("Todavía no eres muy mayor");
        }else{
            console.log("Ya eres mayor");
        }
    }else{
        console.log(nombre+" es menor de edad");
    };

    /*
    Operadores lógicos:
    AND(Y): &&
    OR(O): ||
    Negación: !
    
    */ 

    var year=2020;

    //Negación
    if(year!=2016){
        console.log("El año no es 2016, es el "+year);
    }

    //AND

    if(year>2020 && year <=2030){
        console.log("Estamos en la década 2020");
    }else{
        console.log("No estamos en la década 2020");
    }