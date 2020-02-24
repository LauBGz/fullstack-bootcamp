//En node se recomienda importar a la vieja usanza. Usando ES6 pero no la forma
//de importar de ES6
const colors = require('colors')//require es iuna función por defecto de node
const fs = require ('fs')
const process = require ('process')

const argumentos = process.argv;//da todos los argumentos de todos los procesos

console.log(argumentos);

function escribir(){
  fs.writeFile(
    'data.json',//tipo de archivo
    JSON.stringify({"tiempo": "soleado"}),//datos dentro del archivo
    //hay que parsearlo porque es un obj javascript a json pero depende del tipo
    //puede no hacer falta
    (error)=>{
      if (error){//Si hay error que se ejecute el error en la terminal y no siga funcionando
        throw error
      }else{
        console.log("Archivo guardado con éxito".green);
      }
    }//callback que recibe como argumento por si hay un error
  
  )//sirve para crear archivos. Necesita 3 argumentos.
}

function leer(){
  fs.readFile(//sirve para leer el contenido de un archivo del ordenador
    'data.json',//1º argumento, archivo a leer
    (error, fileContents)=>{//2º argumento, callback con 2 argumentos
      if (error){//Si hay error que se ejecute el error en la terminal y no siga funcionando
        throw error//Siempre hay que añadir el control de error
      }else{
        const data = JSON.parse(fileContents);
        console.log(data);
      }
    }
  )
}

if (argumentos[2] === "--escribir"){
  escribir();
}

if (argumentos[2] === "--leer"){
  leer();
}
