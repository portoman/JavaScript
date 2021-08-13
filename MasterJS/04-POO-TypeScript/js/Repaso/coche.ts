class Coche{

    //Atributos
    public color: string;
    public modelo: string;
    public velocidad: number=0;

    //Métodos
    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color=color;
    }

    
    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad(){
        return this.velocidad;
    }
    public setVelocidad(velocidad: number){
        this.velocidad=velocidad;
    }

    public getModelo(){
        return this.modelo;
    }
    public setModelo(modelo: string){
        this.modelo=modelo;
    }

    //Constructores
    constructor(modelo = null){
        this.velocidad=0;
        if(modelo==null){
        this.modelo="BMW Genérico";
    }else{
        this.modelo=modelo;
    }
        this.color="Blanco";
    }
}

var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");

console.log("El color del coche 1 es: "+coche.getColor());
console.log("El color del coche 2 es: "+coche2.getColor());
console.log("El color del coche 3 es: "+coche3.getColor());

coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("La velocidad del coche 1 es: "+coche.getVelocidad());

var coche4=new Coche("Opel Astra");
console.log("El modelo del coche 4 es: "+coche4.getModelo());
console.log("El color del coche 4 es: "+coche4.getColor());
