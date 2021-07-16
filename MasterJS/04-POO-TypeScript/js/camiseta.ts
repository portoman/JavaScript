//Interface: Las clases que implementen la interface tiene que aplicar el contenido de esta. Como en Java

interface CamisetaBase{
    setColor(color);
    getColor();
}


//Decorador: Añade características a una clase, en este caso un método. ##Indica que esta función se va a eliminar en nuevas actualizaciones
/*function estampar(logo:string){
return function(target:Function){
    target.prototype.estampacion=function():void{
        console.log("Camiseta estampada con el logo de: "+logo);
    }
}
}*/

//Clase (molde del objeto)
//@estampar('Lacoste')
export class Camiseta implements CamisetaBase{//Export: Similar a 'public' en Java

    //Atributos

    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Métodos

    public setColor(color){
        this.color=color;
    };
    public getColor(){
        return this.color;
    }

    public setModelo(color){
        this.modelo=this.modelo;
    };
    public getModelo(){
        return this.modelo;
    }

    public setMarca(marca){
        this.marca=marca;
    };
    public getMarca(){
        return this.marca;
    }

    public setTalla(talla){
        this.talla=talla;
    };
    public getTalla(){
        return this.talla;
    }

    public setPrecio(precio){
        this.precio=precio;
    };
    public getPrecio(){
        return this.precio;
    }

    //Constructores
    constructor(color, modelo, marca, talla, precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio;
    }
}
/*
var camiseta1=new Camiseta();

camiseta1.setColor("Rojo");
camiseta1.setModelo("Manga corta");
camiseta1.setMarca("Adidas");
camiseta1.setTalla("L");
camiseta1.setPrecio(5);

console.log(camiseta1);*/

var camiseta2=new Camiseta("Azul","Manga larga","Nike", "XL", 20 );
console.log(camiseta2);


//Clase hija

export class Sudadera extends Camiseta{
    public capucha:boolean;
    setCapucha(capucha:boolean){
        this.capucha=capucha;
    };
    getCapucha(){
        return this.capucha;
    }
    constructor(color, modelo, marca, talla, precio, capucha){
        super(color, modelo, marca, talla, precio);
        this.capucha=capucha;
    }
}

var sudadera1=new Sudadera("Verde","Sin manga","Reebok", "M",20,true);
console.log(sudadera1);
