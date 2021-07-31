'use strict'

console.log("Hola Mundo con NodeJS");


var params=process.argv.slice(2);

console.log(params);

var numero1=parseFloat(params[0]);
var numero2=parseFloat(params[1]);

console.log(numero1);
console.log(numero2);

var plantilla=`
El primer número es ${numero1}, el segundo es ${numero2}
La suma es: ${numero1+numero2}
La resta es: ${numero1-numero2}
La multiplicación es: ${numero1*numero2}
La división es: ${numero1/numero2}
`

console.log(plantilla);