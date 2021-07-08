"use strict"

//witch

var edad=8;
var imprime="";

switch(edad){
    case 18:
        imprime="Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime="Ya eres adulto";
    break;
    case 40:
        imprime="Estás en la flor de la vida";
    break;
    case 75:
        imprime="Disfruta al máximo";
    break;
    default:
        imprime="Edad no determinada"
}

console.log(imprime);

