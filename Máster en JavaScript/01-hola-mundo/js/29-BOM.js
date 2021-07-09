"use strict";

//BOM (Browser Object Model)->Árbol de etiquetas/objetos del navegador. Se puede interactuar desde Js



function getBom(){
console.log(window.innerHeight);//Ver que alura tiene la ventana (en px)
console.log(window.innerWidth);//Ver que anchura tiene la ventana (en px)
console.log(window.location);//Ver detalles de red
console.log(window.location.host);
}

getBom();

//Función para redirigir a otra web
function redirect(url){
    window.location.href=url;
}

//Función para abrir otra ventana en una pestaña nueva
function abrirVentana(url){
    window.open(url, "", "width=400, height=300");
}

