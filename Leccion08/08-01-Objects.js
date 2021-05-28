//Definicion de un objeto. En Java se instancian objetos a partir de clases, en JS se pueden crear objetos directamente

let persona = {
  nombre: "Alfonso",
  apellido: "Porto",
  email: "portbuj@yahoo.es",
  telefono: 620771628,
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.telefono);
console.log(persona.nombreCompleto);

persona.lang = "en";
console.log(persona.lang);

console.log(persona);

//Otra forma de definir objetos

let persona2 = new Object();
persona2.nombre = "Pepito";
persona2.apellido = "Garcia";
persona2.telefono = "58975489";

console.log(persona2);

//Acceder a las propiedades del objeto

console.log(persona.nombre);
console.log(persona["nombre"]);

//For in: Para recorrer todo el objeto

for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

//Agregar y eliminar atributos

persona.direccion = "Coruña";
console.log(persona);

persona.direccion = "Coruña City";
console.log(persona);

delete persona.direccion;
console.log(persona);

//Distintas formas de imprimir objetos

console.log(persona);

console.log(persona.nombre + " , " + persona.apellido + " ," + persona.email);

for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//Constructor de objetos de tipo persona

function Persona(nombre, apellido, email, telefono) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;

  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

let padre = new Persona("Paco", "Buyo", "pbuyo@hotmail.com", "123456");

let madre = new Persona("Belen", "Perez", "bperez@hotmail.com", "987654");

madre.nombre = "Isabel";

console.log(padre);
console.log(madre);

madre.nombreCompleto;

console.log(madre.nombreCompleto());

console.log(padre);
console.log(madre);

Persona.prototype.telefono = "444444444";

console.log(padre.telefono);
console.log(madre.telefono);

console.log(padre);
console.log(madre);

//Distintas formas de declarar objetos

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(true);
let miBoolean2 = true;

let miArray = new Array();
let miArray2 = [];

//Call

let persona3 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompeto: function (titulo, telefono) {
    return titulo+ ": "+ this.nombre + " " + this.apellido+", "+telefono;
  },
};

let persona4={
    nombre: "Carlos",
    apellido: "Lara"
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2

console.log(persona3.nombreCompeto("Doctor", "87989988"));

console.log(persona3.nombreCompeto.call(persona4, "Ingeniero", "987456812"));

//Apply: Funciona similar a call, pero si la función tiene argumentos hay que meterlos en forma de Array

let array=["Ing", "8798799"];

console.log(persona3.nombreCompeto.apply(persona4, array));