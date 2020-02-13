import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   debeMostrarse:boolean = true;
//   reaparecer:string="Ocultar";
  
//  toggle(){
//     this.debeMostrarse = !this.debeMostrarse;
//     if(this.debeMostrarse){
//       this.reaparecer = "Ocultar";
//     }else{
//       this.reaparecer = "Mostrar";
//     }
//   }
  // ocultar(){
  //   this.debeMostrarse = false;
  // }
  // mostrar(){
  //   this.debeMostrarse = true;
  // }

  
//Toggle: en el primer click se activa y en el segundo se desactiva

// libros:string [] = [
//   "El señor de los anillos",
//   "El don de la lluvia",
//   "El principito",
//   "El nombre del viento"
// ]

// eliminarUltimoLibro(){
//   this.libros.pop();
// }

// invertir(){
//   this.libros.reverse()
// }

// addLibro(){//CASTEO 
//   let newLibro:string = (<HTMLInputElement>document.querySelector('.libroUsuario')).value;
//   this.libros.push(newLibro);
// }

// estilos:object = {
//   "color": "red",
//   "font-weight": "bold"
// }

// cambiarColor(){
// this.estilos["color"] = "blue"
// }

// estilos:object = {
//   "color": "red"
// }


// cambiarColor(){
// let colorUsuario:string = (<HTMLInputElement>document.querySelector('.colorUsuario')).value;

// this.estilos["color"] = colorUsuario;
// }

misClases:string [] = [
  "alert", "alert-secondary"
]

cambiarClases(estilo:string){
this.misClases.splice(1, 1, estilo)
}

}
