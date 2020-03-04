const express = require("express");
const bodyParser = require("body-parser");

const mysql =  require('mysql');
const fs = require('fs');

let secrets = fs.readFileSync('secret.json');//Tiene que ser sync
secrets = JSON.parse(secrets);

//Añadir la conexión

//Crear una variable que tendrá la conexión con la base de datos
const connection =  mysql.createConnection({
    //Le tenemos que decir a donde conectarse, la configuracion
    "host": secrets["mysql_host"],
    "user": secrets["mysql_username"],
    "password": secrets["mysql_password"]
});

//Llamar a la conexión
connection.connect();

//Fin añadir la conexión

console.log("Conectado a MySQL!")

const server = express();

server.use(bodyParser.json());

server.get("/vuelos", (req, res) => {
    
  connection.query(`SELECT * FROM aerolinea.vuelo`,
  (error, rows) => {
    if (error) throw error;
    res.send(rows);
  })
});

server.get("/viajeros", (req, res) => {
    
    connection.query(`SELECT * FROM aerolinea.pasajero`,
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    })
});

server.post('/vuelos', (req, res) =>{
    
   
  let sql = `INSERT INTO aerolinea.reserva (FechaCreacion, Asiento, Clase, Maletas, EquipajeEspecial, Seguro, Precio, Vuelo_ID) VALUES ?`;
  let values =` [
    ${"req.body['FechaCreacion']"},
    ${"req.body['Asiento']"},
    ${"req.body['Clase']"},
    ${ "req.body['Maletas']"},
    ${ "req.body['EquipajeEspecial']"},
    ${ "req.body['Seguro']"},
    ${"req.body['Precio']"},
    ${"req.body['Vuelo_ID']"}
    ]`;

    let valores = JSON.parse(values)

    console.log(valores)
    connection.query(sql, [values], function (error, result) {
    if (error) throw error;
    console.log("1 record inserted");
  });
    // const valores=  

    // console.log(valores)    

    // connection.query(`INSERT INTO aerolinea.reserva
    // (FechaCreacion, Asiento, Clase, Maletas, EquipajeEspecial, Seguro, Precio, Vuelo_ID)
    // VALUES?` [valores],
    // (error, rows) => {
    //     if (error) throw error;
    //     console.log("1 record inserted");
    // })
});

   
 

//         fs.readFile('data.json', (error, fileContents) => {
//         if(error) throw error;      

//         const data = JSON.parse(fileContents)

//         let idPedido = 0;
//         for (const user of data) {
//             if (user["id"] > idPedido){
//                 idPedido = user["id"]
//             }
//             idPedido++;
//             } 

//         const orderData = {
//             "productos": req.body["productos"], 
//             "fecha": req.body["fecha"], 
//             "direccion": req.body["direccion"], 
//             "precio": req.body["precio"],
//             "id": `${idPedido}`
//         }
        
//         //Añado al array de usuarios, el nuevo usuario
//         data.push(orderData);
//         fs.writeFile('data.json', JSON.stringify(data), (error) => {
//             if (error) throw error
//             res.send({"message": "Pedido creado con éxito!"});
//             return;
//         })
//         })
   
// })

server.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});