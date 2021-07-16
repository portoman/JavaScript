"use strict";

/*
Tabla de multiplicar de un número introducido por pantalla

*/
do{

var numero = Number(prompt("Escribe un número", 0));
}while(isNaN(numero));

var contador=numero;
/*    
for(var i=numero;i>=0; i--){

document.write(numero+" * "+contador+" = "+numero*contador+"<br/>");
contador--;
};*/

/*Todas las tablas de multiplicar*/

for(var i=numero;i>=0;i--){
    document.write("Tabla de multiplicar de: "+numero+"<br/>");
    contador=0;
    for(var x=contador; x<=numero;x++){
        document.write(numero+" * "+contador+" = "+numero*contador+"<br/>");
        contador++;
    }
    numero--;
}



 