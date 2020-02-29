// //Endpoint /pedidos. Se realizará una llamada GET a este endpoint y se devolverá 
// //un array con todos los pedidos.
// servidor.get('/pedidos', (req, res) =>{
//     let access = isThereCookie(req.cookies.stamp);

//     if (access){
//         fs.readFile('data.json', (error, fileContents) => {
//             if(error) throw error;
//             const ordersData = JSON.parse(fileContents);
//             res.send(ordersData);
//             return;
//         })
//     } else {
//         res.send({"message": "No puede acceder a esta información."});
//     }
// }) 

// //Endpoint /pedido/:indice Se realizará una llamada GET a este endpoint y 
// //se devolverá la información de aquel pedido que se encuentre en la posición :indice 
// servidor.get('/pedido/:id', (req, res) => {
//     let access = isThereCookie(req.cookies.stamp);

//     if (access){
//         fs.readFile('data.json', (error, fileContents) => {
//             if (error) throw error;
            
//             const data = JSON.parse(fileContents);
            
//             const orderID = req.params.id;
        
//             let singleOrder = data.find(obj => {
//               return(obj.id === orderID)
//             })
        
//             if (singleOrder === undefined) {
//               res.send({"message": "Pedido no existe."});
//             } else {
//               res.send(singleOrder);
//             }
//           })
//     } else {
//         res.send({"message": "No puede acceder a esta información."});
//     }
// })

// //Endpoint /crearPedido. Se realizará una llamada POST con toda la información necesaria 
// //para crear un nuevo pedido: + Productos: array de strings + fecha: string + dirección: string + precio: string 
// servidor.post('/crearPedido', isLoggedIn, (req, res) =>{
//     if(req.body["productos"] && req.body["fecha"] && req.body["direccion"] && req.body["precio"]){
//         fs.readFile('data.json', (error, fileContents) => {
//           if(error) throw error;      

//           const data = JSON.parse(fileContents)

//           let idPedido = 0;
//           for (const user of data) {
//               if (user["id"] > idPedido){
//                 idPedido = user["id"]
//               }
//               idPedido++;
//             } 

//           const orderData = {
//             "productos": req.body["productos"], 
//             "fecha": req.body["fecha"], 
//             "direccion": req.body["direccion"], 
//             "precio": req.body["precio"],
//             "id": `${idPedido}`
//           }
//           //Añado al array de usuarios, el nuevo usuario
//           data.push(orderData);
//           fs.writeFile('data.json', JSON.stringify(data), (error) => {
//             if (error) throw error
//             res.send({"message": "Pedido creado con éxito!"});
//             return;
//           })
//         })
//   }else{
//     res.send({"message": "Body incorrecto."});
//     return;
//   }
// })
// //TODO: AÑADIR VALIDACION POST PEDIDO

// // Endpoint /editarPedido. Se realizará una llamada PUT con toda la información necesaria 
// //para modificar un pedido ya existente. + Productos: array de strings + fecha: 
// //string + dirección: string + precio: string + indice: numero → este número indicará la 
// //posición del pedido que hay que modificar dentro del array de todos los pedidos.
// servidor.put('/editarPedido', (req, res) =>{
//   if(req.body["productos"] && req.body["fecha"] && req.body["direccion"] 
//   && req.body["precio"] && req.body["id"]){
//     fs.readFile('data.json', (error, fileContents) => {
//       if(error) throw error;      
//       const data = JSON.parse(fileContents);
//       let orderPosition = -1;

//       for (i = 0; i < data.length; i++) {
//         if (data[i]["id"] === req.body["id"]){
//           orderPosition = i;
//         }
//       }

//       if (orderPosition > -1){
//         const newOrderData = {
//           "productos": req.body["productos"], 
//           "fecha": req.body["fecha"], 
//           "direccion": req.body["direccion"], 
//           "precio": req.body["precio"],
//           "id": req.body["id"]
//           }
//         data.splice(orderPosition, 1, newOrderData);
//         fs.writeFile('data.json', JSON.stringify(data), (error) => {
//           if (error) throw error;
//           res.send({"message": "Pedido modificado con éxito!"});
//           return;
//         })
//       }else{
//         res.send({"message": "Pedido no encontrado."});
//         return;
//       }
//     })
//   }else{
//     res.send({"message": "Body incorrecto."});
//     return;
//   }
// })
// //TODO: AÑADIR VALIDACION PUT PEDIDO

// //+ Endpoint /eliminarPedido/:indice. Se realizará una llamada DELETE a este endpoint y 
// //se eliminará del archivo de datos aquel pedido que se encuentre en la posición :indice 
// servidor.delete('/eliminarPedido/:id', (req, res) =>{
//   fs.readFile('data.json', (error, fileContents) => {
//     if (error) throw error;

//     let data= JSON.parse(fileContents);

//     const orderID = req.params.id;

//     let positionInArray;

//     let orderToDelete = data.find(obj => {
//       return(obj.id === orderID);
//     })  

//     for (i = 0; i < data.length; i++) {
//       if(data[i] === orderToDelete){
//         positionInArray = i;
//       }
//     }

//     data.splice(positionInArray, 1)

//     if(orderToDelete === undefined){
//       res.send({"message": "Pedido no existe"});
//       return;
//     } else {
//       fs.writeFile('data.json', JSON.stringify(data), (error) => {
//         if (error) throw error;
//         res.send({"message": "Pedido borrado con éxito!"});
//         return;
//       })
//     }
//   })
// });
// //TODO: AÑADIR VALIDACION DELETE PEDIDO