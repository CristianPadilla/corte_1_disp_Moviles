const funciones = require('./funcionesParaElMain.js');
  // Ya tenemos acceso a ese fichero
  

var textoConUnParametro = funciones.imprimirConParametros('hola');
  // Estamos obteniendo lo que exporta el fichero al que hemos llamado
console.log (textoConUnParametro);
  // Se imprimirá en consola --> El parámetro pasado es: hola

var textoSinParametros = funciones.imprimirSinParametros();
console.log(textoSinParametros);
  // Se verá por consola el texto que devuelve la función exportada

var suma = funciones.sumar(3,2);
console.log(suma); // 5
