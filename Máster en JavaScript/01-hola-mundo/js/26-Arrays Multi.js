"use strict";

//Arrays Multidimensionales

var categorias=["Acción", "Terror", "Comedia"];
var peliculas=["Terminator", "La vida es bella", "Gran Torino"]

var cine=[categorias, peliculas];

console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][2]);

peliculas[5]="Spiderman";
console.log(peliculas);

peliculas.push("Batman");
console.log(peliculas);

peliculas.pop();
console.log(peliculas);

var indice=peliculas.indexOf("Spiderman");


peliculas.pop(indice);
console.log(peliculas);

//Covertir un array en un String
var String=peliculas.join();
console.log(String);

//Convertir un String en un array

var cadena ="texto1, texto2, texto3";
var cadena_array=cadena.split(", ");

console.log(cadena_array);

//Ordenar arrays

console.log(peliculas.sort());
console.log(peliculas.reverse());

