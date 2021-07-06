function mifuncion1(){
    console.log("función 1");
}

function miFuncion2(){
    console.log("función 2");
}

miFuncion2();
mifuncion1();

//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res=op1+op2;
    funcionCallback(`Resultado: ${res}`)
}

sumar(5,3,imprimir);

/*Procesos síncronos-> Línea a línea, Procesos asíncronos-> Diferentes líneas a la vez*/

//Llamadas asíncronas con uso setTimeOut
function miFuncionCallback(){
    console.log("Saludo asíncrono después de 3 segundos");
}

setTimeout(miFuncionCallback, 3000);//Después de 3 segundos

setTimeout(function(){console.log("Saludo asíncrono después de 4 segundos")}, 4000);

setTimeout(()=> console.log("Saludo asíncrono después de 5 segundos"), 5000);

//setInterval

let reloj=()=>{
    let fecha=new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);

}

setInterval(reloj, 2000);