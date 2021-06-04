"use strict"
try{
    //let x=10;
    x=10;
}
catch(error){
console.log(error);
}
finally{//Siempre se va a ejecutar. Es opcional

console.log("Termina la revisión de errores");
}
console.log("continuamos....");


let resultado="5";
try{
    if(isNaN(resultado)) throw "No es un número";
    else if(resultado==="") throw "Es una cadena vacia";
    else if(resultado>=0) throw "Valor positivo";
    else if(resultado<0) throw "Valor negativo";
}
catch(error){
    console.log(error);
}
finally{

    console.log("Termina la revisión de resultado");
    }