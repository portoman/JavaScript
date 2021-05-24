//let coches=new Array("BMW","Seat", "VW");//Forma no recomendada

const coches= ["BMW","Seat", "VW"];
console.log(coches);

console.log(coches[1]);


//Recorrer un array
for(let i=0;i<coches.length;i++){
    console.log("El coche "+i+" es:"+ coches[i]);
}

//Modificar un valor

coches[2]="Opel";
console.log(coches);

//Añadir elementos a un Array (Imposible en Java)

coches.push("Volvo");
console.log(coches);

coches[8]="Renault";
console.log(coches);

console.log(coches.length);

//Saber si es un array

console.log(typeof coches);
console.log(Array.isArray(coches));
console.log(coches instanceof Array);