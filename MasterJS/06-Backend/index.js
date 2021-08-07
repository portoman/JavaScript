'use strict'
/*#### INICIO ####*/
//Para arrancar el servidor: npm start (Así lo hemos configurado en package.json) dentro de la carpeta del proyecto
//Para arrancar MongoDB hay que abrir el archivo mongod.exe en : C:\Program Files\MongoDB\Server\5.0\bin


//Conectándose a la base de datos
var mongoose=require('mongoose');
var app=require('./app')
var port= 3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio',{ useNewUrlParser:true, useUnifiedTopology: true }
)
    .then(()=>{
        console.log("Conexión a la base de datos establecida con éxito...");
        
        //Creación del servidor
        app.listen(port, ()=>{
            console.log("Servidor corriendo correctamente en la url: localhost:3700");
        });

    })
    .catch(err=>console.log(err));

