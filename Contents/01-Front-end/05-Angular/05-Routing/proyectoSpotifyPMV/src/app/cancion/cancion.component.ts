import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent{

  indiceCancion:string = "";
  cancionesDatos: object[] = [
    {
    "titulo": "I Walk The Line", 
    "autor": "Johnny Cash",
    "archivo": "/assets/audio/I_walk_the_line.mp3",
    },
    {
    "titulo": "Miña terra galega", 
    "autor": "Siniestro Total",
    "archivo": "/assets/audio/Miña_terra_galega.mp3"
    },
    {
    "titulo": "Mr. Brightside", 
    "autor": "The Killers",
    "archivo": "/assets/audio/Mr._Brightside.mp3"
    },
    {
    "titulo": "Seize the day", 
    "autor": "Avenged Sevenfold",
    "archivo": "/assets/audio/Seize_The_Day.mp3"
    },
  ];

  constructor(public _rute : ActivatedRoute) {
    this.indiceCancion = _rute.snapshot.params["indice"];
    //Con el parámetro de la ruta creada
    //{"path":"song/:indice", "component": CancionComponent},
   }

}
