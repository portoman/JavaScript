"use strict";

/*
Funciones anónimas: Es una función que no tiene nombre
*/

var pelicula=function(nombre){
    return "La pelicula es: "+nombre;
};


//Declaración de la función
function sumame(numero1, numero2, sumaYmuestra){
    var sumar=numero1+numero2;

    sumaYmuestra(sumar);
    return sumar;
}

//Invocación de la función sumame. Se le pasa una función anónima y callback-> Se mete una función en otra como parámetro
sumame(5,7,function(dato){
    console.log("La suma es: "+dato);
});

/*
Función de flecha:
Otra manera de sintaxis:
(dato)=>{
    console.log("La suma es: "+dato);
});

*/