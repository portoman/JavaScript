export class Zapatilla{
    /*
    Manera tradicional de crear una clase:

    public nombre: string;
    public marca: string;
    public color: string;
    public precio:number;
    public stock:boolean;

    constructor(nombre, marca, color, precio, stock){
        this.nombre=nombre;
        this.marca=marca;
        this.color=color;
        this.precio=precio;
        this.stock=stock;
    }*/

    /*Manera abreviada con Angular*/
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio:number,
        public stock:boolean){
    }
}