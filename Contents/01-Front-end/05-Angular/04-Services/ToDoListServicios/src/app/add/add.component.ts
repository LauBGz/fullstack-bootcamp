import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor() { }

  listadoTareas: string [];

  insertarTarea(tarea: string){
    
    this.listadoTareas.push(tarea);
    console.log(tarea)  
  }
}
