"use strict";

window.addEventListener("load", () => {
  console.log("DOM cargado!!");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener("submit", () => {
    console.log("Evento submit capturado");

    var nombre = document.querySelector("#nombre").value; //.value-> Para capturar el valor de un formulario
    var apellido = document.querySelector("#apellidos").value;
    var edad = document.querySelector("#edad").value;

    console.log(nombre, apellido, edad);

    box_dashed.style.display = "block";

    /*//Una manera de hacerlo
    var datosUsuario=[nombre, apellido, edad];

    for(var indice in datosUsuario){
      var parrafo=document.createElement("p");
      parrafo.append(datosUsuario[indice]);
      box_dashed.append(parrafo);
    }
   */

    var p_nombre=document.querySelector("#p_nombre span");
    var p_apellido=document.querySelector("#p_apellido span");
    var p_edad=document.querySelector("#p_edad span");

    p_nombre.innerHTML=nombre;
    p_apellido.innerHTML=apellido;
    p_edad.innerHTML=edad;
  });
});
