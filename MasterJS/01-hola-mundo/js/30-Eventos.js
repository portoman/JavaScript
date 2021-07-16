"use strict";

//Método load-> Se puede incluir el script al principio de la página html si se incluye todo el código js dentro del método load
window.addEventListener("load",()=>{


    //Eventos del ratón

var boton1 = document.querySelector("#boton1");

var boton2 = document.querySelector("#boton2");

function cambiarColor() {
  if (boton2.style.background == "green") {
    boton2.style.background = "red";
  } else {
    boton2.style.background = "green";
  }
  return true;
}

var boton3 = document.querySelector("#boton3");

//Buena práctica: Traer todo el código a este archivo, escribiendo lo mínimo en el html
//En Universidad Java pone directamente el código en html dentro de la etiqueta=>Ejemplo: onclick="sumar()"

//Click
boton3.addEventListener("click", function () {
  alert("hola has presionado el botón 3");
  this.style.border="10px solid black";//This->Para referirse al objeto
});

//Doble-Click
boton3.addEventListener("dblclick", function () {
  alert("hola has presionado el botón 3-doble click");
});

//Mouse over
boton3.addEventListener("mouseover", function () {
  boton3.style.background = "blue";
});

//Mouse out
boton3.addEventListener("mouseout", function () {
  boton3.style.background = "red";
});

//Eventos de teclado

var input = document.querySelector("#campo_nombre");

//Focus
input.addEventListener("focus", function () {
  input.style.background = "green";
});

//Blur

input.addEventListener("blur", function () {
    input.style.background = "red";
  });

  //Keydown

input.addEventListener("keydown", function () {
    input.style.background = "blue";
  });

//Keypress

input.addEventListener("keypress", function () {
    input.style.background = "yellow";
  });

  //Keyup

input.addEventListener("keyup", function () {
    input.style.background = "orange";
  });

});