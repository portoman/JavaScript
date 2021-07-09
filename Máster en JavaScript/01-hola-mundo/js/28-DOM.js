"use strict";

//DOM (Document Object Model)

//Seleccionar elementos con un id concreto

//var caja = document.getElementById("micaja");//Manera clásica
var caja = document.querySelector("#micaja");//Con querySelector

console.log(caja);

//Modificar contenido
caja.innerHTML = "Texto en la caja desde Js";
console.log(caja);

//Modificar estilos

caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
console.log(caja);

//Funciones para aplicar desde consola

function cambiaColor(color){
    caja.style.backgroundColor=color;
}

//Asignar clase a un objeto

caja.className="hola";

//Seleccionar elementos por su etiqueta
var todosLosDivs=document.getElementsByTagName("div");
console.log(todosLosDivs);


var contenidoDiv2=todosLosDivs[2].textContent;
console.log(contenidoDiv2);

todosLosDivs[2].innerHTML="Otro texto para div2";

console.log(todosLosDivs[2].textContent);


//Seleccionar elementos por su clase css

