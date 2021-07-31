'use strict'
//Express

var express=require('express');
var bodyParser=require('body-parser');

var app=express();

//Cargar archivos de rutas

//Middewares: método que se ejecuta antes de la ruta

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//RUTAS

app.get('/',(req, res)=>{
    res.status(200).send(
        "<h1>Página de inicio</h1>"
    );
})


app.get('/test',(req, res)=>{
    res.status(200).send({
        message: "Hola Mundo desde mi API NodeJS"
    });
})


//Exportar

module.exports=app;

