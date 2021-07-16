'use strict'

//JSON - JavaSript Object Notation

var pelicula={
    titulo: "Batman",
    year: 2017,
    country: "USA"
};

//Modificar un atributo

pelicula.titulo="Superman";

console.log(pelicula);

//Array de objetos

var peliculas=[
    {titulo: "Spiderman", year:"2020", country:"GB"},
    pelicula
]
console.log(peliculas);

var index;
var caja_peliculas=document.querySelector("#peliculas");

for(index in peliculas){
    var p=document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year+" - "+peliculas[index].country);
    caja_peliculas.append(p);
}