"use strict";

/*
Programa que nos pida 2 números y que nos diga cual es el mayor, el menor y si son iguales
*/
var numero1;
var numero2;

function introducirDatos() {
   numero1 = Number(prompt("Escribe el primer número", "Número 1"));
   numero2 = Number(prompt("Escribe el segundo número", "Número 2"));
}

introducirDatos();

console.log(numero1);

console.log(numero2);
8
if (numero1 > numero2) {
  alert(
    "El primer número (" +
      numero1 +
      ") es MAYOR que el segundo (" +
      numero2 +
      ")"
  );
} else if (numero1 == numero2) {
  alert("Los números son iguales");
} else if (numero2 < numero1) {
  alert(
    "El primer número (" +
      numero1 +
      ") es MENOR que el segundo (" +
      numero2 +
      ")"
  );
} else if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
  alert("Introduce números correctos");
  introducirDatos();
}
