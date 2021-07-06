
/*
Ejemplos de tipos de datos en JavaScript
*/

//Tipo de dato String
var nombre="Alfonso";
console.log(nombre);

/*typeof-> Para saber de que tipo es una variable. 
Las variables en JS son dinámicas, pueden cambiar de tipo*/
console.log(typeof nombre);
nombre=10;
console.log(typeof nombre);

//Tipo de dato número
var numero=1000;
console.log(numero);

//Tipo de objeto
var objeto={
    nombre: "Alfonso",
    apellido: "Porto"
}
console.log(objeto);

//Booleano
var bandera=true;
console.log(bandera);
console.log(typeof bandera);

//Funcion
function miFuncion(){};
console.log(miFuncion);
console.log(typeof miFuncion);

//Symbolo
var simbolo=Symbol("mi simbolo")
console.log(simbolo);
console.log(typeof simbolo);

//Tipo Clase es una función
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido
    };
}

console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);

x=undefined;
console.log(x);

//null
var y=null;
console.log(y);
console.log(typeof y);


//Arrays
var coches=['BMW', 'Audi', 'Volvo'];
console.log(coches);
console.log(typeof coches);

var z='';
console.log(z);
console.log(typeof z);

//Concatenaciones
var nombre="Juan";
var apellido="Perez";

var nombreCompleto =nombre + " " + apellido;
console.log(nombreCompleto);

var x=nombre+219;
console.log(x);

var x=nombre+2+7;
console.log(x);

var x=nombre+(2+7);
console.log(x);

var x=+2+7+nombre;
console.log(x);

//Declaración correcta de variables

nombre="Pablo";//Mala práctica
//nombre;

let nombre2="Pablito"; //Buena práctica

//const apellido2="Perez";//Constantes
//apellido2="Hola";

let nombreCompleto2="Alfonso Porto";
console.log(nombreCompleto2);

let x1, y1;//Declaración de varias variables en una línea (Como en Java)
x1=20, y1=30;
let z1=x1+y1;
console.log(z1);

//JavaScript es case sensitive, como en Java

//Las varibles no pueden empezar con número. Solo símbolo dolar $, como en Java

let a1pp;
let _Nombre;
let $Hola;

//Tampoco se puede llamar a una varible empezando con un keyword

