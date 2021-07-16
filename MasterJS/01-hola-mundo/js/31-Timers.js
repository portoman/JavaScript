"use strict";

window.addEventListener("load", () => {
  //Timers

  //setInterval

  function intervalo() {
    var tiempo = setInterval(function () {
      console.log("Set interval ejecutado");

      var encabezado = document.querySelector("h1");

      if (encabezado.style.background == "blue") {
        encabezado.style.background = "green";
      } else {
        encabezado.style.background = "blue";
      }
    }, 1000);

    return tiempo;
  }

  var tiempo = intervalo();//Variable para poder meter en el método clearInterval

  //Parar el bucle
  var stop = document.querySelector("#stop");
  stop.addEventListener("click", () => {
    clearInterval(tiempo);
  });

  //Iniciar el bucle
  var start = document.querySelector("#start");
  start.addEventListener("click", () => {
    intervalo();
  });
});
