let a = 3,
  b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b; //Módulo
console.log("Resultado operación módulo: " + z);

z = a ** b; //Exponente
console.log("Resultado operación exponente: " + z);

//Incremento
//Pre-incremento

z = ++a;
console.log(a);
console.log(z);
//Post-incremento
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento

z = --a;
console.log(a);
console.log(z);
//Post-decremento
z = b--;
console.log(b);
console.log(z);

//Precedencia de operadores
(a = 3), (b = 2);
let c = 1,
  d = 4;
z = a * b + c / 4;
console.log(z);

z = a * (b + c);
console.log(z);

//Operadores de asignación

a = 1;
a += 3;
console.log(a);

a -= 2;
console.log(a);

// *=, /=, %=

//Operadores de comparación

(a = 3), (b = 2), (c = "3");

z = a == c; //Compara el valor sin importar el tipo
console.log(z);

z = a === c; //Compara el valor teniendo en cuenta el tipo
console.log(z);

//Distinto a (!=)
z = a != c;
console.log(z);

z = a !== c;
console.log(z);

//Operadores relacionales

(a = 3), (b = 3), (c = "3");
z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

//Ejercicio número par

a = 10;

if (a % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

//Ejercicio Mayor de edad

let edad=17, adulto=18;

if(edad >=adulto){
  console.log("Es mayor de edad");
}else{
  console.log("Es menor de edad");
}

//Operador AND (&&) (Regresa true solo si los 2 operandos son true)

a=15;
let valMin=0, valMax=10;
if(a>=valMin && a<=valMax){
  console.log("Valor dentro del rango");
}else{
  console.log("Valor fuera del rango");
}

//Operador OR (||) (Regresa true si cualquier operando es true)

let vacaciones=false, diaDescanso=true;

if(vacaciones || diaDescanso){
  console.log("Puede ir al partido de su hijo");
}else{
  console.log("No puede ir al partido de su hijo");
}

//Operador ternario

resultado= (1>2)?"verdadero":"falso";
console.log(resultado);

let numero=9;
resultado=(numero%2==0)?"Es par":"Es impar";
console.log(resultado); 

//Convertir de String a number

let miNumero="19";
console.log(typeof miNumero);

edad=Number(miNumero);
console.log(typeof edad);

//Funcion isNan-> Para saber si un String puede convertirse a un número

edad="133e";

if(isNaN(edad)){
  console.log("No es un número");
}