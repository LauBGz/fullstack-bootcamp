import { Component, OnInit } from '@angular/core';
import { DataPeriodicosService } from '../servicios/data-periodicos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  textoBusqueda: string ="";

  constructor(public _data: DataPeriodicosService) { 
  
  }

 OnInput() {
   this._data.filtrar(this.textoBusqueda);

 }


  
}
