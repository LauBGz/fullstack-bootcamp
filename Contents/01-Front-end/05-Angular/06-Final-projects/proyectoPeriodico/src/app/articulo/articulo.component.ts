import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataPeriodicosService } from '../servicios/data-periodicos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  articulo: any = {}
  id: number = 0;

  constructor( private _rute: ActivatedRoute, public _data: DataPeriodicosService) {
    this._rute.params.subscribe( params =>{
    this.id = params['id'];
  }) }

}
