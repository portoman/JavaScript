"use strict";

//DOM (Document Object Model)-> Árbol de etiquetas/objetos HTML. Se puede interactuar desde Js

//Seleccionar elementos con un id concreto

//var caja = document.getElementById("micaja");//Manera clásica
var caja = document.querySelector("#micaja");//Con querySelector

console.log(caja);

//Enviar contenido desde Js
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

//Seleccionar elementos por su etiqueta: Esto crea un array
var todosLosDivs=document.getElementsByTagName("div");
console.log(todosLosDivs);

//Obtener el contenido del elemento 2 del array
var contenidoDiv2=todosLosDivs[2].textContent;

//Modificar el contenido del elemento 2
todosLosDivs[2].innerHTML="Otro texto para div2";

var seccion=document.querySelector("#miseccion");
var valor;

//Recorriendo el array:
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent== "string"){
    var parrafo=document.createElement("p");//Etiqueta párrafo
    var texto=document.createTextNode(todosLosDivs[valor].textContent);//Crear texto con el contenido indicado(el contenido del array)
    parrafo.append(texto);//Incluir texto en párrafo
    seccion.append(parrafo);//Incluir párrafo en mi sección
}
}

var hr=document.createElement("hr");
seccion.append(hr);

//Seleccionar elementos por su clase css

var divsGreen=document.getElementsByClassName("verde");
console.log(divsGreen);

var divsYellow=document.getElementsByClassName("amarillo");

//Modificar los elementos
divsYellow[0].style.backgroundColor="yellow";


for(var elemento in divsGreen){
    if(divsGreen[elemento].className=="verde"){
    divsGreen[elemento].style.backgroundColor="green";
    }
    console.log(divsGreen[elemento]);//Esto es para saber que elementos hay en el array
}

//Selecionar con query selector

var id=document.querySelector("#miseccion")
console.log(id);

//Para seleccionar clases, no vale, solo te selecciona una:
var clase=document.querySelector("rojo");
console.log(clase);

//Recomienda usar Document.querySelectorAll()