/*
  En esta miniaplicación hay un ejemplo mínimo de servidor con Express (uno de los
  paquetes de Node más conocidos y utilizados). Express tiene muchas funciones y
  vale la pena investigar un poco para conocerlo mejor y ver todo su gran potencial,
  aquí simplemente lo usaremos para conectarnos (por ejemplo mediante el navegador)
  a dos "endpoints" uno en formato texto y otro en json. Se podrían devolver también
  otros formatos (xml, páginas html, etc).
*/

const express = require('express');
const app = express();
  // Ya tenemos contacto con la aplicación servidor express
const puertoQueLeAsignamosAlServidor = 3000;


app.get('/', (request, response) => {
  // get recibe dos parámetros: el path del recurso y una función (aquí en
  // formato fat arrow de ES6) con lo que nos envía el cliente y lo que devolvemos)
  response.send('Enhorabuena, estás conectado al servidor express')
});
  // Para conectar a este endpoint sería http://(direcciondelservidor):3000
  // Desde el mismo ordenador: localhost:3000


app.get('/ejemplojson', (req, res) => { // se suele poner abreviado
  res.send({
    nombre: 'Pepe',
    edad: 20,
    aficiones: [
      "cine",
      "pasear"
    ]
  });
  // Express se da cuenta de que enviamos un json y se encarga de colocar el header
  // Content-Type en la respuesta como json en lugar de texto (se puede ver al
  // ir a la url con Chrome por ejemplo, en las herramientas de desarrollador)
});
  // localhost:3000/ejemplojson


app.listen(puertoQueLeAsignamosAlServidor, () => {
  console.log('Servidor escuchando por el puerto 3000');
});
  // "listen" admite varios parámetros: el puerto es el único obligatorio, el
  // segundo es una función que se ejecuta cuando se conecta
