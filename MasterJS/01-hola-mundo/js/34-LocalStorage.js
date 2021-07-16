"use strict"

//LocalStorage->Memoria en el navegador disponible durante la sesión 

//Comprobar disponibilidad del localstorage

if (typeof(Storage)!=="undefined"){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con LocalStorage disponible");
};

//Guardar datos
localStorage.setItem("titulo", "Curso de JavaScript");

//Recuperar elemento
var elemento=localStorage.getItem("titulo");
document.querySelector("#peliculas").innerHTML=elemento;

//Guardar objeto en localstorage (hay que convertirlo a String (con JSON.stringify). Solo se pueden almacenar Strings o números)

var usuario={
    nombre:"Alfonso",
    apellido:"Porto",
    email:"portbuj@yahoo.es"
}

localStorage.setItem("usuario",JSON.stringify(usuario))

//Recuperar objeto->Se pasa de String a JSON con JSON.parse

var userjs=JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#datos").append(" "+userjs.nombre+" "+userjs.apellido);

//Borrar elemento-Las órdenes se ejecutan en cascada, por lo que seguirá apareciendo el usuario en html ya que esa intrucción es anterior

localStorage.removeItem("usuario");

//Borrar toda la memoria

localStorage.clear();