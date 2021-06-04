class Empleado{
    constructor(nombre, sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo);
        this.departamento=departamento;
    }
    obtenerDetalles(){//Sobreescritura
        return `Gerente: ${super.obtenerDetalles()} departamento: ${this.departamento}`;
    }
}


function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());//Polimorfismo
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
    }
    else if(tipo instanceof Empleado){
        console.log("Es un tipo Empleado");
    }
    else if(tipo instanceof Object){
        console.log("Es un tipo Object");
    }
    
}

let gerente1=new Gerente("Paco", 8000, "Gerencia");

let empleado1=new Empleado("Pedro", 7000);



determinarTipo(empleado1);

determinarTipo(gerente1);


