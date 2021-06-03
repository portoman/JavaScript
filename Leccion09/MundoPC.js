class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton=++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

let raton1=new Raton("USB","Dell");
console.log(raton1.toString());

raton1.marca="Hp";//Llamada al método set

let raton2=new Raton("Bluetooth","Hp");
console.log(raton2.toString());
console.log(raton1.toString());