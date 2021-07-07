"use strict"

//Let y var

var numero = 40;
console.log(numero);

if(true){
    var numero=50;//Var actua como una variable global
    console.log(numero);
}

console.log(numero);

/********************************/

var numero2 = 40;
console.log(numero2);

if(true){
    let numero2=50;//Let actua como una variable local
    console.log(numero2);
}

console.log(numero2);
