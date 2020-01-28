let jugador1;
let jugador2;

function esGanador (elemento){
    let resultado = "El jugador 2 gana."
    if(jugador1=== elemento) {
        resultado = "El jugador 1 gana."
    }
    return resultado;
    console.log(resultado)
}
function jugarPiedraPapelTijera (strJugador1, strJugador2){
    let resultado = "Empate.";
  
    if ((strJugador1 === "piedra" && strJugador2 === "tijeras" )|| (strJugador1 === "tijeras" && strJugador2 === "piedra" )){
       resultado = esGanador("piedra");
    }
    if ((strJugador1 === "papel" && strJugador2 === "piedra" )|| (strJugador1 === "piedra" && strJugador2 === "papel" )){
        resultado = esGanador("papel");
    }
    if ((strJugador1 === "tijeras" && strJugador2 === "papel" )|| (strJugador1 === "papel" && strJugador2 === "tijeras" )){
        resultado = esGanador("tijeras");
    }
    return resultado;
}

function PulsarPiedra(event){
    let piedra = event.target.id;
    jugador1 = piedra;
    jugador2 = piedra;
}

document.querySelector("#piedra").addEventListener("click", PulsarPiedra);

function PulsarPapel(event){
    let papel = event.target.id;
    jugador1 = papel;
    jugador2 = papel;
}

document.querySelector("#papel").addEventListener("click", PulsarPapel);

function PulsarTijeras(event){
    let tijeras = event.target.id;
    jugador1 = tijeras;
    jugador2 = tijeras;
}

document.querySelector("#tijeras").addEventListener("click", PulsarTijeras);

//let jugar = jugarPiedraPapelTijera(jugador1, jugador2);