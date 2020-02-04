let fecha =  new Date ();
console.log(fecha);//Tue Feb 04 2020 13:12:15 GMT+0100 (hora estándar de Europa central)

fecha.getFullYear(); // 2020    

fecha.getMonth(); // 1 - empieza en 0

fecha.getDate();//4

fecha.getDay();//2 -de 7-

let mañana = new Date("2020/02/05")

//Unix time: número en milisegundos desde el 01/01/70

fecha.getTime() - mañana.getTime()  //Diferencias en milisegundos

(fecha.getTime() - mañana.getTime()) / 1000 /60 / 60 //Horas que quedan desde fecha (hoy) a mañana

//momento actual + 42 horas

let nuevaFecha = fecha.getTime() + (42*60*60*1000);

new Date (nuevaFecha);