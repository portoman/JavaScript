"use strict";

//Fechas

var fecha=new Date();

var year=fecha.getFullYear();
var month=fecha.getMonth();
var day=fecha.getDate();


var textoHora=`

El año es: ${year}
El mes es: ${month}
El dia es: ${day}

`;


console.log(textoHora);


