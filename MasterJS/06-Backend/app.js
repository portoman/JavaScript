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

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS
app.use('/api', project_routes);

//Exportar

module.exports=app;

