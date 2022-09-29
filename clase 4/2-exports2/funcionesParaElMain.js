// En todos los archivos node hay una variable que se llama "module" (se puede
// ver lo que tiene con un simple console.log por ejemplo). Module no tiene
// aquí mucha utilidad exepto por una de sus propiedades que es "exports",
// que es un objeto (en principio vacío) que podremos llenar de lo que
// queramos y llamar desde otros archivos:

module.exports.imprimirConParametros = function (textoAImprimir) {
    // se puede usar una arrow function al ser ES6, lo pongo aquí así por claridad
  return 'El parámetro pasado es: ' + textoAImprimir;
};

module.exports.imprimirSinParametros =  () => {
    // ejemplo de que se puede usar una arrow function de ES6
  return 'Se devuelve un texto sin parámetros que será el que se imprima';
};

module.exports.sumar = (a,b) => {
  return a + b;
};


/*
Otra forma de hacer lo mismo: en lugar de exportar las funciones,
creamos un objeto y le adjuntamos las funciones como si fueran
propiedades del mismo objeto. Después al exportar el objeto las
funciones que tenga se exportarán dentro de él.


let objetoParaExportarAlFinal = {};

objetoParaExportarAlFinal.imprimirConParametros = function (textoAImprimir) {
    // se puede usar una arrow function al ser ES6, lo pongo así por claridad
  return 'El parámetro pasado es: ' + textoAImprimir;
};

objetoParaExportarAlFinal.imprimirSinParametros =  () => {
    // ejemplo de que se puede usar una arrow function de ES6
  return 'Se devuelve un texto sin parámetros que será el que se imprima';
};

objetoParaExportarAlFinal.sumar = (a,b) => {
  return a + b;
};

module.exports = objetoParaExportarAlFinal;
*/
