"use strict";

//Bucle while

var year = 2018;

while (year <= 2030) {
  console.log("Estamos en el año" + year);


  if (year == 2020) {
    break;
  }
  year++;
}

//Do-while

var years = 3;

do {
  console.log("Si es mayor que 30 se imprime solo una vez");
  years++;
} while (years <= 30);
