"use strict";

/*Las variables definidas dentro de las funciones son de ámbito local, 
no se pueden acceder a ellas fuera de la función(como en Java)*/

function holaMundo(texto){

    var hola_mundo="Variable local"

    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero=12;
var texto="Variable global";
holaMundo(texto);

console.log(hola_mundo);
