"use strict";

/*
Mostrar si un número es par o impar 

*/
do{

var numero = Number(prompt("Escribe un número", 0));
}while(isNaN(numero));

    if(numero%2==0){
        document.write(numero+" es PAR");
    }else{
        document.write(numero+" es IMPAR");
    };


 