document.querySelector('.add').addEventListener("click", () => {
    //La fecha a día de hoy en unix code
    let fechaActual = new Date().getTime();
    //La fecha límite es igual a la fecha actual + 6 años en milisegundos
    let fechaLimite = fechaActual + (60*12*30*24*60*60*1000);
    //Número random entre fecha actual y fecha límite -unix code-
    let unixCode = Math.floor(Math.random() * (fechaLimite - fechaActual)) + fechaActual;
    //Creación de la fecha de la muerte a partir del code unix random
    let fechaMuerte = new Date(unixCode);
    //Función para que los números menores de 10 aparezcan con un 0 delante
    function convertirDosDigitos (numero){
        if(numero < 10){
            numero = "0" + numero;
        }
        return numero;
    }
    
    let diaMuerte = convertirDosDigitos(fechaMuerte.getDate());
    let mesMuerte = convertirDosDigitos(fechaMuerte.getMonth()+1);
    let horaMuerte = convertirDosDigitos(fechaMuerte.getHours());
    let minutosMuerte = convertirDosDigitos(fechaMuerte.getMinutes());
  
    //Texto a mostrar al usuario con el día, mes, año, hora y minutos obtenidos de la fecha
    document.querySelector('.mensaje').innerHTML = `
    Morirás el día ${diaMuerte}/${mesMuerte}/${fechaMuerte.getFullYear()}
    a las ${horaMuerte}:${minutosMuerte}.
    `
});