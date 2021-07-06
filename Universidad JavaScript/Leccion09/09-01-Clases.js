//No es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting, como las funciones
//let persona2=new Persona("Karla", "Juarez");

class Persona{

    

    static contadorObjetosPersona=0;//Atributo estatico, de clase
    email="Valor default email";//Atributo de objeto


    static get MAX_OBJ(){//Constante estática 
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        if(Persona.contadorObjetosPersona<Persona.MAX_OBJ){
            this.idPersona= Persona.contadorObjetosPersona++;
        }else{
            console.log("Se han superado el máximo de objetos permitidos: 5");
        }
       
        console.log("Se incrementa contador: "+Persona.contadorObjetosPersona);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }

    //Definición de un método de una función: No hace falta poner function

    nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }

    //Sobreescribiendo el método de la clase padre(Object)
    toString(){
        /*Se aplica polimorfismo (múltiples formas en tiempo de ejecución)
        el método se ejecuta depende si es una referencia de tipo padre o de tipo hijo*/
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde el método static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

let persona1=new Persona("Juan", "Perez");
console.log(persona1);

let persona2=new Persona("Carlos", "Lara");

console.log(persona2);

//Invocación de métodos get y set, distinta a Java

persona1.nombre="Juan Carlos";//set nombre("Juan Carlos")
console.log(persona1.nombre);//get nombre

console.log(persona1);

//Herencia

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)//Llama al constructor de la clase padre
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }

    //Sobreescritura en un método
    nombreCompleto(){
        return super.nombreCompleto()+", "+this._departamento;
    }
    
}

let empleado1=new Empleado("Alfonso","Porto", "Desarrollo");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//toString()-> Método con polimorfismo
console.log(empleado1.toString());
console.log(persona2.toString());

//Static-> Se asocia con la clase, no con los objetos
//persona1.saludar(); no es posible llamar un método static desde un objeto
//En los métodos static solo se puede observar la salida por la consola

Persona.saludar();
Persona.saludar2(persona1);

//Estos métodos static también se heredan
Empleado.saludar();
Empleado.saludar2(empleado1);

//Atributo static

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Constante estática

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=3;
console.log(Persona.MAX_OBJ);