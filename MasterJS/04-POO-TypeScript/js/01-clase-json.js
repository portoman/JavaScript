var bicicleta={
    color:'Rojo',
    modelo:'BMX',
    frenos:'Disco',
    velocidadMaxima:'6okm/h',

    cambiaColor: function(nuevo_color){
        //bicicleta.color=nuevo_color;
        this.color=nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");

