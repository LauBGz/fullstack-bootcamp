document.querySelector('.add').addEventListener("click", () => {
    let fechaActual = new Date().getTime();
    let fechaLimite = fechaActual + (60*12*30*24*60*60*1000);
    let unixCode = Math.floor(Math.random() * (fechaLimite - fechaActual)) + fechaActual;
    let fechaMuerte = new Date(unixCode);
    console.log(fechaMuerte);
    document.querySelector('.mensaje').innerHTML = `
    Morirás el día ${fechaMuerte.getDate()}/${fechaMuerte.getMonth()+1}/${fechaMuerte.getFullYear()}
    a las ${fechaMuerte.getHours()}:${fechaMuerte.getMinutes()}.
    `
});