/*
  Ejemplo de servidor node en el que se devuelve al usuario un html con contenido
  dinámico. Para ejecutarlo tenemos que haber instalado un módulo que se llama "ejs",
  y que nos permite meter parámetros y código javascript dentro de documentos html.

  Para usar ejs solo tenemos que incluirlo como cualquier otro módulo de Node
  (con npm o yarn), en este proyecto ya está hecho así que al hacer "yarn install"
  para poder ejecutarlo en la carpeta node_modules se cargará con Express.

  El código comentado a continuación (que llama a un fichero html, también
  comentado) es bastante autoexplicativo:
*/

const express = require('express');
const app = express();
const puertoQueLeAsignamosAlServidor = 3000;

//app.set ('view engine', "ejs"); // Al final viene la explicación a esta línea


app.get('/', (req, res) => {
  res.send('Esto es un texto plano devuelto al usuario con SEND')
});


app.get('/:nombre', (req, res) => {
  // Ahora el servidor acepta cualquier url que encaje con este patrón y guarda
  // los valores que queramos en un objeto de la request que se llama "params". En
  // este caso, si escribimos http://ladireccion.com:3000/pepe, params = {nombre: 'pepe'}
  let nombreDelUsuario =  req.params.nombre;
  let cuantas = nombreDelUsuario.length;
  res.render('cuantasletras.ejs', {nombreDelUsuario: nombreDelUsuario, cuantas: cuantas});
    // El archivo .ejs es un html "vitaminado" con las características de ejs. Por
    //defecto Express lo busca en una subcarpeta que se llama "views".
});
  // Se pueden meter varios valores con una url más compleja, por ejemplo:
  // '/:animal/raza/:nombredelaraza' --> localhost:3000/gato/raza/angora
  // Aquí el objeto params sería: { animal: 'gato' , raza: 'angora' }


app.listen(puertoQueLeAsignamosAlServidor, () => {
  console.log('Servidor escuchando por el puerto 3000');
});


/*
¿Qué es esa línea comentada app.set? Si no la ponemos no pasa nada, es un detallito
para hacernos más cómodo el trabajo. Sirve para decirle que los archivos que
renderizaremos son del tipo ejs por defecto, así que descomentándola no nos haría ya
falta ponerle la extensión .ejs a los que usemos (en este caso 'cuantasletras.ejs'
pasaría a poder escribirse solo como 'cuantasletras');
*/
