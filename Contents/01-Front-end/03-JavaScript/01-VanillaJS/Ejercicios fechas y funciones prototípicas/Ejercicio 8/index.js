document.querySelector('.add').addEventListener("click", () => {
    //La fecha a día de hoy en unix code
    let fechaActual = new Date().getTime();
    //La fecha límite es igual a la fecha actual + 6 años en milisegundos
    let fechaLimite = fechaActual + (60*12*30*24*60*60*1000);
    //Número random entre fecha actual y fecha límite -unix code-
    let unixCode = Math.floor(Math.random() * (fechaLimite - fechaActual)) + fechaActual;
    //Creación de la fecha de la muerte a partir del code unix random
    let fechaMuerte = new Date(unixCode);
    //Texto a mostrar al usuario con el día, mes, año, hora y minutos obtenidos de la fecha
    document.querySelector('.mensaje').innerHTML = `
    Morirás el día ${fechaMuerte.getDate()}/${fechaMuerte.getMonth()+1}/${fechaMuerte.getFullYear()}
    a las ${fechaMuerte.getHours()}:${fechaMuerte.getMinutes()}.
    `
});