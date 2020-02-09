let resultados = $('.results');

let estFav = localStorage.getItem("station");

if (estFav !== null) {
    $('.nav-favs').empty();
    $('.nav-favs').append(estFav);
} 

function imprimir(respuesta){

    resultados.empty()
    
    resultados.append(`
        <div class="table-wrapper">
            <table class="fl-table">
                    <tr>
                        <th>ID de la estación</th>
                        <th>Bicis disponibles</th>
                        <th>Espacios disponibles</th>
                        <th>Opción de carga</th>
                    </tr>
                <tbody class="cuerpoTabla">

                </tbody>
            </table>
        </div>
    `);

    let {stations} = respuesta.data;    
    for (let index = 0; index < stations.length; index++) {  
        let opcionCarga = "No";
        if(stations[index]["is_charging_station"] === true){
            opcionCarga = "Sí";
        }
        $('.cuerpoTabla').append(`
            <tr>
                <td>${stations[index]["station_id"]}</td>
                <td>${stations[index]["num_bikes_available"]}</td>
                <td>${stations[index]["num_docks_available"]}</td>
                <td>${opcionCarga}</td>
            </tr>
        `);
    }
};


$('.askAll').click(function (e) { 
    e.preventDefault();
    $.ajax({//pasamos un objeto como argumento
        "url": "https://dataestbicbcn2020.free.beeceptor.com",
        "type": "GET", // DELETE: no llevan body.
        "success": imprimir //son callbacks con lo cual no es necesario el control de errores
            
            //jQuery detecta el tipo de respuesta y
            //hace automaticamente un JSON parse.
        ,
        "error": function (error) {//son callbacks con lo cual no es necesario el control de errores
            console.log(error);
        },
        "headers": {//es un objeto dentro de otro objeto. Las APIs deciden en muchos casos que
            //headers hay que incluir.
            "content-type": "application/json",// cuando se hace un post es mejor ponerle esto para
            // "X-Requested-With": "'XMLHttpRequest", de ser necesarias cors
            //avisar a la API de que se le envía datos en formato X
        }
    });
});
    
    

$('.askGeolocal').click(function (e) { 
    e.preventDefault();
    $.ajax({//pasamos un objeto como argumento
        "url": "https://ubestbicbcn2020.free.beeceptor.com/",
        "type": "GET", // DELETE: no llevan body.
        "success": geolocalizar //son callbacks con lo cual no es necesario el control de errores
            
            //jQuery detecta el tipo de respuesta y
            //hace automaticamente un JSON parse.
        ,
        "error": function (error) {//son callbacks con lo cual no es necesario el control de errores
            console.log(error);
        },
        "headers": {//es un objeto dentro de otro objeto. Las APIs deciden en muchos casos que
            //headers hay que incluir.
            "content-type": "application/json",// cuando se hace un post es mejor ponerle esto para
            // "X-Requested-With": "'XMLHttpRequest", de ser necesarias cors
            //avisar a la API de que se le envía datos en formato X
        }
    });
});


function geolocalizar(objeto){
    //Función para obtener las coordenadas de la posición del usuario
    function userLocation(position) {
        nearestStation(position.coords.latitude, position.coords.longitude);
        }

    //Funciones matemáticas 
    function Deg2Rad(deg) {
        return deg * Math.PI / 180;
    }

    function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
        lat1 = Deg2Rad(lat1);
        lat2 = Deg2Rad(lat2);
        lon1 = Deg2Rad(lon1);
        lon2 = Deg2Rad(lon2);
        let R = 6371; // km
        let x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
        let y = (lat2 - lat1);
        let d = Math.sqrt(x * x + y * y) * R;
        return d;
    }

    //Si el navegador lo soporta que obtenga la posición del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(userLocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    //Función para obtener la dirección más cercana según la latitud/longitud
    function nearestStation(latitude, longitude) {
        let minDif = 99999;
        let closest;
        
        for (index = 0; index < objeto.data.stations.length; ++index) {
            let dif = PythagorasEquirectangular(latitude, longitude, objeto.data.stations[index]["lat"], objeto.data.stations[index]["lon"]);
            if (dif < minDif) {
                closest = index;
                minDif = dif;
            }
        }
        
        resultados.empty()
    
        resultados.append(`
        <div class="nearestStation">
            <p>Estación más cercana: ${objeto.data.stations[closest].name} 
            <button class="saveFav btn btn-warning btn-sm">Favoritas<i class="fa fa-star-o"></i></button></p>
        <div>
        `)

        $('.saveFav').click(function (e) { 
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("station", objeto.data.stations[closest].name);
                $('.nav-favs').empty();
                $('.nav-favs').append(localStorage.getItem("station"));
                alert("Estación guardada");
              } else {
                alert("Sorry, your browser does not support web storage...");
              }
        });
    }   
}




