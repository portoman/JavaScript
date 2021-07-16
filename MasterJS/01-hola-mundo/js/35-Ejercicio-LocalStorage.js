"use strict";

var formulario = document.querySelector("#formpeliculas");

var caja_pelicula = document.querySelector("#peliculas2");

formulario.addEventListener("submit", function () {
  var titulo = document.querySelector("#addpelicula").value;

  if (titulo.length >= 1) {
    localStorage.setItem(titulo, titulo);
  }
});

for (var ind in localStorage) {
  var titulop = localStorage.getItem(ind);

  if (titulop != null) {
    var li = document.createElement("li");
    li.append(titulop);
    caja_pelicula.append(li);
  }
}

var formularioBorrado = document.querySelector("#formBorrarPeliculas");

var caja_pelicula = document.querySelector("#peliculas2");

formularioBorrado.addEventListener("submit", function () {
  var titulo = document.querySelector("#borrarPelicula").value;

  if (titulo.length >= 1) {
    localStorage.removeItem(titulo, titulo);
  }
});
