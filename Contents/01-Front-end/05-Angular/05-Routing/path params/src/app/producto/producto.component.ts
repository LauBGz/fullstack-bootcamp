import { Component, OnInit } from '@angular/core';
//Decirle al componente que coja los parámetros de la url
//Utilizamos un servicio que importamos de angular
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent{
//_rute es el nombre del parámetro pero puede ser otro

  indice:string = "";
  datosLibros: object[] = [
    {"titulo": "Caperucita", "precio": "5€"},
    {"titulo": "Javascript for dummies", "precio": "20€"},
    {"titulo": "Blancanieves", "precio": "8€"}
  ]

  constructor(public _rute : ActivatedRoute) {
    this.indice = _rute.snapshot.params["nombreProducto"];
   }

  //Borramos la aplicación onInit
 
}
