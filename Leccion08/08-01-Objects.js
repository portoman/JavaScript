//Definicion de un objeto. En Java se instancian objetos a partir de clases, en JS se pueden crear objetos directamente

let persona={
    nombre:"Alfonso",
    apellido:"Porto",
    email:"portbuj@yahoo.es",
    telefono:620771628,
    idioma:"es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma=lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre+" "+this.apellido;
    },
   
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.telefono);
console.log(persona.nombreCompleto);

persona.lang="en";
console.log(persona.lang);

console.log(persona);

//Otra forma de definir objetos

let persona2=new Object();
persona2.nombre="Pepito";
persona2.apellido="Garcia";
persona2.telefono="58975489";

console.log(persona2);

//Acceder a las propiedades del objeto

console.log(persona.nombre);
console.log(persona["nombre"]);

//For in: Para recorrer todo el objeto

for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar y eliminar atributos

persona.direccion="Coruña";
console.log(persona);

persona.direccion="Coruña City";
console.log(persona);

delete persona.direccion;
console.log(persona);


//Distintas formas de imprimir objetos

    console.log(persona);

    console.log(persona.nombre+" , "+persona.apellido+" ,"+persona.email);

    for(nombrePropiedad in persona){
        console.log(persona[nombrePropiedad]);
    }

    let personaArray=Object.values(persona);
    console.log(personaArray);

    let personaString=JSON.stringify(persona);
    console.log(personaString);