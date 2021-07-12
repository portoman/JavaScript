"use strict";

//Fetch (ajax) y peticiones a servicios/apis rest: Accede a un servicio remoto (url), hace una petición y obtiene los datos

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

getUsuarios()
  .then((data) => data.json()) //Pedimos los datos en formato json
  .then((users) => {
    listadoUsuarios(users.data); //Primero se ejecuta esta promesa u después las siguientes
    return getInfo();
  })
  .then((data) => {
    div_profesor.innerHTML=data;

    return getJanet();
  })
  .then((data) => data.json())
  .then((user) => {
    mostrarJanet(user.data); 
  })
  .catch(error=>{//Para captar errores
    console.log(error);
    alert("Error en las peticiones");
  })

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

//Crear una promesa

function getInfo() {
  var profesor = {
    nombre: "Alfonso",
    apellidos: "Porto Bujía",
    email: "portbuj@yahoo.es",
  };
  return new Promise((resolve, reject) => {
    var profesor_string = "";

    setTimeout(function () {
      profesor_string = JSON.stringify(profesor);
      if (typeof profesor_string != "string" || profesor_string == "")
     return reject("error 1");

    return resolve(profesor_string);
    }, 3000);

    
  });
}

function listadoUsuarios(usuarios) {
  usuarios.map((users, i) => {
    let nombre = document.createElement("h3");

    nombre.innerHTML = i + " - " + users.first_name + " " + users.last_name;

    div_usuarios.appendChild(nombre);
    document.querySelector("#loading").style.display = "none"; //Mientras no cargue la petición se muestra este span. Cuando carga se oculta (display="none")
  });
}

function mostrarJanet(user) {
  let nombre = document.createElement("h3");
  let avatar = document.createElement("img");

  nombre.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = "300";

  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);

  document.querySelector("#loading2").style.display = "none";
}
