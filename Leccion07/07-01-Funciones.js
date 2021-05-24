//Llamando a la función
miFuncion(1,2);

//Declaración de la función
function miFuncion(a,b){
    console.log("Suma: "+(a+b));
}

//Llamando a la función
miFuncion(3,4);

//Return

function miFuncion2(a,b){
    return a+b;
}

console.log(miFuncion2(1,8));

//Declaración Función de tipo Expresión

let sumar=function(a,b){return a+b};

resultado=sumar(1,2);
console.log(resultado);

//Función Self Invoking

(function(a,b){
    console.log("Ejecutando la función: "+(a+b));
})(3,4);

//Las funciones son objetos
var miFuncionTexto=miFuncion.toString();
console.log(miFuncionTexto);

//Función flecha

const sumarFuncionTipoFlecha=(a,b)=>a+b;

console.log(sumarFuncionTipoFlecha(1,5));

//Parámetros y argumentos: El número de argumentos puede no coincidir con el número de parámetros

let sumar2=function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
return a+b+arguments[2]
};

resultado=sumar2(1,4,8);
console.log(resultado);

//Sumar todos los argumentos



function sumarTodo(){
    let suma=0;
    for(let i=0; i<arguments.length;i++){
        suma+=arguments[i];
    }
return suma;
}

resultado=sumarTodo(5,4,8,8,7,6);
console.log(resultado);

//Paso por valor
x=10;
function cambiarValor(a){
    a=20;
}

cambiarValor(x);
console.log(x);
//La variable local es local, solo existe dentro de la función
//console.log(a);

const persona={
    nombre:"Pablo",
    apellido:"Lopez"
}

function cambiarValorObjeto(p1){

    p1.nombre="Alberto",
    p1.apellido="Ares"
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);