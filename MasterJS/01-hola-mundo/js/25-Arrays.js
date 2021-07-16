"use strict";

//Arrays-> Un array puede tener diferentes tipos de datos, no como en Java

var nombre="Alfonso Porto";

var nombres=["Alfonso Porto", "Pedro Garcia", "Lurdes Martinez"];

var lenguajes=new Array("PHP", "JS", "C", "Java");

console.log(nombres);
console.log(nombres[0]);

console.log(nombres.length);

/*
var elemento=parseInt(prompt("Qué elemento del array quieres?", 0));
while(elemento>=nombres.length){
    alert("Introduce un número menor que: "+ nombres.length);
    var elemento=parseInt(prompt("Qué elemento del array quieres?", 0));
}

alert("El nombre con número: "+elemento+" se llama: "+nombres[elemento]);
*/



document.write("<h2>Nombres:</h2>")
document.write("<ul>");
//Recorrer un Array con for
/*
for(var i=0;i<nombres.length;i++){
    document.write("<li>"+nombres[i]+"</li>");
}*/

//forEach()
nombres=["Alfonso Porto", "Pedro Garcia", "Lurdes Martinez"];

nombres.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
})

nombres.forEach((elemento, indice, array)=>{
    console.log(array);
    document.write("<li>"+indice+" "+elemento+"</li>");
})

//forin

for(var elemento in nombres){
    document.write("<li>"+nombres[elemento]+"</li>");
}

document.write("</ul>");

//Busquedas


var busqueda=lenguajes.find(lenguaje => lenguaje=="PHP");

console.log(busqueda);

busqueda=lenguajes.findIndex(lenguaje => lenguaje=="PHP");

console.log(busqueda);

var precios=[10,20,50,70,100]

//Saber si hay cifras mayores de 20
busqueda=precios.some(precio => precio>=20);
console.log(busqueda);


