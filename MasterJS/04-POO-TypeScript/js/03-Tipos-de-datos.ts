
export=true;

//String o number (Multiples valores) La variable cadena puede ser string o number
let cadena: string | number="Alfonso";

//number
let numero: number=12;


//Booleano
let verdadero_falso: boolean=true;


//Any-> Para que no tenga tipado fuerte

let cualquiera: any="hola";

//Array
var lenguajes: Array<string> =["PHP", "JS", "Java"];

let years: number[]=[12,13,14]

console.log(cadena, numero, verdadero_falso, cualquiera,lenguajes, years);

//Tipos de datos personalizados

type letrasONumeros = string | number;

let letONum: letrasONumeros="Porto";

//Let vs var
//Let->Definición a nivel local
//Var->Definición a nivel global 

var numero1=10;
var numero2=12;

if(numero1==10){
    let numero1 =44;
    var numero2=55;
    console.log(numero1, numero2);
}

console.log(numero1, numero2);