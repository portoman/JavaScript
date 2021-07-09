"use strict";

//Arrays Multidimensionales

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero(todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
*/

var i=0;
var longitud=6;
var lista=[];

   
while(i<longitud){
    var numero=Number(prompt("Escribe número: "));
    lista.push(numero);
    i++;
}

console.log(lista);
//Mostrar lista de números:

document.write("<h1>Lista de números</h1>");
document.write("<ul>");


lista.forEach((elemento, indice)=>{
    document.write("<li> Nº "+indice+" es el: "+elemento+"</li>");
    console.log("Nº "+indice+" es el: "+elemento);
});

document.write("</ul>");
console.log(lista);

//Mostrar números ordenados:

document.write("<h1>Números ordenados</h1>");
document.write("<ul>");

var listaOrdenada=lista.sort();

listaOrdenada.forEach((elemento, indice)=>{
    document.write("<li> Nº "+indice+" es el: "+elemento+"</li>");
    console.log("Nº "+indice+" es el: "+elemento);
});

document.write("</ul>");

//Mostrar números invertidos: 

document.write("<h1>Números invertidos</h1>");
document.write("<ul>");

var listaInvertida=lista.reverse();
console.log(lista);
listaInvertida.forEach((elemento, indice)=>{
    document.write("<li> Nº "+indice+" es el: "+elemento+"</li>");
    console.log("Nº "+indice+" es el: "+elemento);
});

document.write("</ul>");

//Mostrar elementos del array:
document.write("<h1>Cantidad de elementos: </h1>"+lista.length);

//Buscar número
var busqueda=Number(prompt("¿Qué número quieres buscar?"));

document.write("<h2>El resultado de la búsqueda es: </h2>");
var resultadoCifra=lista.findIndex(numero => numero==busqueda);


if(resultadoCifra!=-1){
    document.write("<h3>ENCONTRADO!!</h3>");
    document.write("Su índice es:"+resultadoCifra);
}else{
    document.write("<h3>NO ENCONTRADO!!");
};
console.log(lista);
console.log(resultadoCifra);