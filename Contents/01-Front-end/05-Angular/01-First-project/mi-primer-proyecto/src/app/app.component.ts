import { Component } from '@angular/core';

//"Decora" las clases
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Angular utiliza clases para todo y todo debe ir dentro de la clase.
export class AppComponent {
  cuenta:number = 1;

  incrementar(){
    this.cuenta++;
  }

  decrementar(){
    if(this.cuenta > 0){
    this.cuenta--;
    }
  }
}

//Data binding: enlazamiento de datos entre html y typescript

