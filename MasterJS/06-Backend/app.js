'use strict'
//Express

var express=require('express');
var bodyParser=require('body-parser');

var app=express();

//Cargar archivos de rutas

var project_routes=require('./routes/project');


//Middewares: método que se ejecuta antes de la ruta

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//RUTAS
app.use('/api', project_routes);

//Exportar

module.exports=app;

