const ingresos=[
    new Ingreso("Salario", 700),
    new Ingreso("Venta coche", 100.00)
];

const egresos=[
    new Egreso("Cañas", 80),
    new Egreso("Cena", 1888)
];

let cargarApp=()=>cargarCabecero();

let totalIngresos= ()=>{
    let totalIngreso=0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos= ()=>{
    let totalEgreso=0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}
let cargarCabecero= ()=>{
    let presupuesto=totalIngresos()-totalEgresos();
    let porcentajeEgreso=totalEgresos()/totalIngresos();

    document.getElementById("presupuesto").innerHTML=formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML=porcentajeEgreso;
    document.getElementById("ingresos").innerHTML=formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML=formatoMoneda(totalEgresos());
}

const formatoMoneda=(valor)=>{
   return valor.toLocaleString('es-ES', {style: 'currency', currency:"EUR", minimumFractionDigits:2});
}