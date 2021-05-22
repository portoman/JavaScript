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
let c = 1;
z = a * b + c;
console.log(z);

z = a * (b + c);
console.log(z);

