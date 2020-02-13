export class EventoProgramado{
    fechaInicio:string = "";
    hora:string = "";
    titulo:string = "";
    descripcion:string = "";
    nombreFacilitador:string = "";
    email:string = "";
    numMaxParticipantes:number = 0;
    numActualParticipantes:number = 0;
  
    constructor(date:string, time:string, title:string, description:string, nameCreator:string, mail:string, numMax:number, currentNum:number){
      this.fechaInicio = date;
      this.hora = time;
      this.titulo = title; 
      this.descripcion = description;
      this.nombreFacilitador = nameCreator;
      this.email = mail;
      this.numMaxParticipantes = numMax;
      this.numActualParticipantes = currentNum;
    }
  }