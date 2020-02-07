// $.ajax({//pasamos un objeto como argumento
//     "url": "https://api.chucknorris.io/jokes/random",
//     "type": "GET", // DELETE: no llevan body.
//     "success": function (respuesta) {//son callbacks con lo cual no es necesario el control de errores
//         console.log(respuesta);//jQuery detecta el tipo de respuesta y
//         //hace automaticamente un JSON parse.
//     },
//     "error": function (error) {//son callbacks con lo cual no es necesario el control de errores
//         console.log(error);
//     },
//     "headers": {//es un objeto dentro de otro objeto. Las APIs deciden en muchos casos que
//         //headers hay que incluir.
//         "content-type": "application/json",// cuando se hace un post es mejor ponerle esto para
//         // "X-Requested-With": "'XMLHttpRequest", de ser necesarias cors
//         //avisar a la API de que se le envía datos en formato X
//     }
// });

//Función alernativa en jQuery para hacer peticiones de tipo get
$.get("https://api.chucknorris.io/jokes/random", function(respuesta){console.log(respuesta)})
//,function(error){console.log(error)} para añadir función de error

//Función alernativa en jQuery para hacer peticiones de tipo post
$.post("https://api.chucknorris.io/jokes/random", 
    {"name": "morpheus", "job": "leader"},
    function(respuesta){console.log(respuesta)})
//,function(error){console.log(error)} para añadir función de error

//No hay $.delete ni $.put

// $.ajax({//pasamos un objeto como argumento
//     "url": "https://test-neoland4.free.beeceptor.com/",
//     "type": "POST", //o PUT: sí tienen body, es lo mismo solo que los datos tienen que existir de antes.
//     "success": function (respuesta) {//son callbacks con lo cual no es necesario el control de errores
//         console.log(respuesta);//jQuery detecta el tipo de respuesta y
//         //hace automaticamente un JSON parse.
//     },
//     "error": function (error) {//son callbacks con lo cual no es necesario el control de errores
//         console.log(error);
//     },
//     "headers": {//es un objeto dentro de otro objeto. Las APIs deciden en muchos casos que
//         //headers hay que incluir.
//         "content-type": "application/json",
//        // "X-Requested-With": "'XMLHttpRequest", de ser necesarias cors
//        //aunque puede fallar si la API no acepta ese tipo de petición
//         // cuando se hace un post es mejor ponerle esto para
//         //avisar a la API de que se le envía datos en formato X
//     },
//     "data": {
//         "name": "morpheus",
//         "job": "leader"
//     }
// });


