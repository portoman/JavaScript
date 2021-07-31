'use strict'

var mongoose=require('mongoose');
var Scheme=mongoose.Schema;

var ProjectSchema=mongoose.Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs:[String]
})

module.exports=mongoose.model('Project',ProjectSchema);

//Mongoose pasa el nombre a minúsculas y plural (Project->projects) 
//En projects se guardarán los documents de la colección