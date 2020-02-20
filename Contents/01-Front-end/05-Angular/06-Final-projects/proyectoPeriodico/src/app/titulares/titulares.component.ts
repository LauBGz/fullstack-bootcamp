import { Component, OnInit } from '@angular/core';
import { DataPeriodicosService } from '../servicios/data-periodicos.service';


@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.css']
})
export class TitularesComponent {

  //titularesPeriodico: object[] =  this._data.getDatosPeriodicos();
  
  constructor(public _data: DataPeriodicosService) { 
  
  }

}
