"use strict";

/*
Mostrar todos los numeros entre 2 números introducidos por un usuario que sean IMPARES   

*/

var numero1 = Number(prompt("Escribe un número", 0));
var numero2 = Number(prompt("Escribe otro número", 0));

document.write("<h1>De"+numero1+" a "+numero2+" están estos números:</h1>")
for(var i=numero1;i<=numero2;i++){
    if(i%2!=0){
    document.write(i+" es impar <br/>");
}
}
 