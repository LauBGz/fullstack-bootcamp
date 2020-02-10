import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-segundo-proyecto';

  puntos:object = {
    Adolfo: 0, 
    Sergio: 0, 
    Alex: 0,
    Laura: 0,
    Ernesto: 0,
    Leo: 0, 
    Alejandro: 0,
    Samu: 0,
    Diego: 0,
    Miguel: 0,
  }
 
  incrementar(nombre: string){
    this.puntos[nombre]++
  }

  decrementar(nombre: string){
    this.puntos[nombre]--;
  }

  fraseGanador:string = "";

  ganador:string;

  puntuacion:number = 0;

  mostrarResultado(){
    let claves = Object.keys(this.puntos);

    for (let i = 0; i < claves.length; i++) {
      if(this.puntos[claves[i]] >= this.puntuacion){
        this.puntuacion = this.puntos[claves[i]];
        this.ganador = claves[i];
    }

    this.fraseGanador = "EL GANADOR ES… "+this.ganador;
  }
}
}

// export class AppComponent {
//   title = 'ejercicio-uno';
//   winner = ""
//   count: object = {
//     Adolfo: 0,
//     Sergio: 0,
//     Alex: 0,
//     Laura: 0,
//     Ernesto: 0,
//     Leo: 0,
//     Alejandro: 0,
//     Samuel: 0,
//     Miguel: 0,
//     Diego: 0,
//   }
//   sumar(name:string) {
//     this.count[name]++
//   }
//   restar(name:string) {
//     this.count[name]--
//   }
//   resultado(){
//     let valuesArray:number[] = Object.values(this.count);
//     let keysArray:string[] = Object.keys(this.count)
//     let maxValue:number = Math.max.apply(null, valuesArray)
//     let maxKey:string = keysArray[valuesArray.indexOf(maxValue)]
//     this.winner = `El ganador es ${maxKey}`
//   }
// }
