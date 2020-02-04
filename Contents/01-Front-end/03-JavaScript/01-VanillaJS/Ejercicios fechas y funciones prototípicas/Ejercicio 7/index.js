document.querySelector('.add').addEventListener("click", () => {
    //Cojo el valor del input y creo un obejto fecha
    let fechaNacimiento = new Date(document.querySelector('.fechaNac').value);
    //Creo un objeto fecha con los datos a día de hoy
    let fechaActual = new Date();
    //Convierto las fechas a unix time y calculo los días pasando de milisegundos a días
    let diasTranscurridos = (fechaActual.getTime() - fechaNacimiento.getTime()) / 1000 / 60 / 60 / 24;
    document.querySelector('.mensaje').innerHTML = `<p>Naciste hace ${diasTranscurridos} días!</p>`
});