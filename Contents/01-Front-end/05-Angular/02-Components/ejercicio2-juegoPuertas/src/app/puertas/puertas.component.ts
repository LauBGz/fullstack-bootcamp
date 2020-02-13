import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.component.html',
  styleUrls: ['./puertas.component.css']
})
export class PuertasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getResult(){
    let options:string[] = [
      "Enhorabuena! has ganado 10.000€!", 
      "Ohhhhhh! Lástima, la próxima vez será. Llévate esta colleja de consolación",
    ]; 

    let result:string = options[Math.floor(Math.random() * options.length)];
    
    alert(result);
    
  }
}
