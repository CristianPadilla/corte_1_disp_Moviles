/*
Ejemplo de cómo con Express se puede montar un servidor web prácticamente con nada:
especificamos en qué directorio queremos que estén los archivos y listo
*/


const express = require('express');
const app = express();

app.use(express.static(__dirname + '/carpeta_publica'));
// app.use(express.static(__dirname + '/carpeta-estilos')); // Sigue leyendo para saber
                                                         // por qué esto está comentado

app.listen(3000, () => {console.log ('Servidor funcionando en el puerto 3000');});



/*
Y ya está, en cuatro líneas tenemos nuestro servidor web.

Donde dice lo de "static" estamos decidiendo cuál es directorio donde Express
buscará los archivos html estáticos para enviarlos al navegador del visitante.
__dirname quiere decir el directorio donde está ejecutándose la aplicación node
(estamos diciendo que queremos una ruta relativa a nuestra carpeta principal),
podría ser una ruta absoluta o bien concatenarle a esto (como es este caso) lo
que queramos. Para el usuario la carpeta que especifiquemos será como si fuera
la carpeta raíz de la web, el trabajo de Node aquí le resulta invisible.

Ahora si entramos con un navegador a la dirección donde esté el funcionando el
servidor, o sea

  http://ladireccionquesea.com:3000/index.html

  (o si es en nuestro propio equipo-->  localhost:3000/index.html)

veremos el documento que tengamos con el nombre que hayamos especificado, o bien
si no ponemos nada (localhost:3000 solamente) por defecto Express nos mandaría a
index.html... de la carpeta donde hayamos definido los estáticos, claro.

¿Y por qué está comentada la línea de arriba? Si ejecutamos ahora nuestro servidor
veremos que los estilos css no se cargan. ¿Por qué? Porque Express por defecto
bloquea el uso de recursos salvo que le especifiquemos que se pueden usar
"públicamente". Para eso sirve "app.use", en este caso la línea comentada dice a
express que el los ficheros estáticos que estén dentro de la subcarpeta
"carpeta-estilos" sí tienen permitido el acceso. Descomentando la línea y reiniciando
el servidor veremos que ahora el css sí funciona.

*/
