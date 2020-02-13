import { Component } from '@angular/core';
import {EventoProgramado}  from '../app/model/eventoProgramado';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-gestion-eventos';

  listadoDeEventosProgramados:any [];

  constructor(){
    let primerEventoProgramado = new EventoProgramado(
      "15/02/2020", 
      "20:00", 
      "Curso de Boostrap", 
      "Curso de iniciación a la librería de maquetación más usado",
      "Alejandro",
      "alejandro@neoland.com",
      10,
      5);
    
    let segundoEventoProgramado = new EventoProgramado(
      "20/02/2020", 
      "18:00", 
      "Curso Switch", 
      "Aprende a sacar todo el partido de la herramienta por excelencia de programación.",
      "Samuel",
      "samuel@neoland.com",
      10,
      4);
    
    let tercerEventoProgramado = new EventoProgramado(
      "24/02/2020", 
      "19:00", 
      "Filosofía existencial", 
      "¿De dónde venimos? ¿A dónde vamos? Descubre todas las respuestas.",
      "Diego",
      "diego@neoland.com",
      10,
      6);

      this.listadoDeEventosProgramados = [primerEventoProgramado, segundoEventoProgramado, tercerEventoProgramado];
  }
  borrar(indice:number){
    this.listadoDeEventosProgramados.splice(indice, 1)
  }

  // validarParticipantes(indice:number){
  //   let numParticipantesPorUsuario: number = parseInt((<HTMLInputElement>document.querySelector('.numParticipantes'+indice)).value);
  //   if(numParticipantesPorUsuario > this.listadoDeEventosProgramados[indice]["numMaxParticipantes"]){
  //     alert("Error");
  //   }else{
  //     this.listadoDeEventosProgramados[indice]["numMaxParticipantes"] = numParticipantesPorUsuario;
  //   }
  // }

  validarParticipantes(indice:string, event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    let valorParticipante: string = target.value
    if(valorParticipante > this.listadoDeEventosProgramados[indice]["numMaxParticipantes"]){
      alert('introduce el numero correcto');
      target.focus()
    }
    event.preventDefault();
  }

  insertarEvento(){
    let titulo: string = (<HTMLInputElement>document.querySelector('.titulo')).value;
    let facilitador: string = (<HTMLInputElement>document.querySelector('.facilitador')).value;
    let fecha: string = (<HTMLInputElement>document.querySelector('.fecha')).value;
    let email: string = (<HTMLInputElement>document.querySelector('.email')).value;
    let hora: string = (<HTMLInputElement>document.querySelector('.hora')).value;
    let maxPar: number = parseInt((<HTMLInputElement>document.querySelector('.maxParticipantes')).value);
    let descripcion: string = (<HTMLInputElement>document.querySelector('.descripcion')).value; 
    let participantes: number = 0;
    
    let nuevoEventoProgramado = new EventoProgramado(fecha, hora, titulo, descripcion, facilitador, email, maxPar, participantes);
    
    this.listadoDeEventosProgramados.push(nuevoEventoProgramado);
  
  }
}




