let condicion = true;

if (condicion) {
  console.log("Condición verdadera");
} else {
  console.log("Condición falsa");
}

let numero = 1;
if (numero == 1) {
  console.log("Número 1");
} else if (numero == 2) {
  console.log("Número 2");
} else if (numero == 3) {
  console.log("Número 3");
} else if (numero == 4) {
  console.log("Número 4");
} else if (numero == 5) {
  console.log("Número 5");
} else {
  console.log("Número desconocido");
}

//Ejercicio estación del año

let mes = 1;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
  estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
  estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
  estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
  estacion = "Otoño";
} else {
  console.log("Valor incorrecto");
}

console.log(estacion);

//Ejercicio hora del dia

let hora = 8;
let mensaje;

if (hora >= 6 && hora <= 11) {
  mensaje = "Buenos Días";
}
if (hora >= 12 && hora <= 18) {
  mensaje = "Buenos Tardes";
}
if (hora >= 19 && hora <= 24) {
  mensaje = "Buenas Noches";
}
if (hora >= 0 && hora <= 6) {
  mensaje = "Durmiendo";
}

console.log(mensaje);

//Switch

numero = 4;

let numeroTexto = "Valor desconocido";

switch (numero) {
  case 1:
    numeroTexto = "Número uno";
    break;
  case 2:
    numeroTexto = "Número dos";
    break;
    case 3:
    numeroTexto = "Número tres";
    break;
    case 4:
    numeroTexto = "Número cuatro";
    break;
    case 5:
    numeroTexto = "Número cinco";
    break;
}
console.log(numeroTexto);

//Ejercicio Estacion del año con switch

mes=3;
switch(mes){
    case 1:case 2: case 12:
        estacion="Invierno";
        break;
        case 3:case 4: case 5:
        estacion="Primavera";
        break;
        case 6:case 7: case 8:
        estacion="Verano";
        break;
        case 9:case 10: case 11:
        estacion="Otoño";
        break;
        default:
            estacion="Valor incorrecto";
}
console.log(estacion);