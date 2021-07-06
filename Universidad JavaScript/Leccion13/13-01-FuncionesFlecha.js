let miFuncion = function () {
  console.log("saludos desde mi función");
}

let miFuncionFlecha = () => {
  console.log("saludos desde mi función flecha");
};

miFuncionFlecha();

const miFuncionFlecha2 = () => console.log("saludos desde mi función flecha2");

miFuncionFlecha2();

const funcionConParametros=(mensaje) =>console.log(mensaje);

funcionConParametros("Hola");

const funcionConVariosParametros=(op1, op2)=> {
    let resultado=op1+op2;
    return console.log(resultado);
}

const funcionConVariosParametros2=(op1, op2)=>op1+op2;

funcionConVariosParametros(3,5); 
console.log(funcionConVariosParametros2(1,5));