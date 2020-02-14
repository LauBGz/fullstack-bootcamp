import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent {

  catalogoCanciones: object[] = [
    {
      "titulo": "I Walk The Line", 
      "autor": "Johnny Cash",
      "URL": "/song/0",
      "genero": "country",
      "mood": "good"
    },
    {
      "titulo": "Miña terra galega", 
      "autor": "Siniestro Total",
      "URL": "/song/1",
      "genero": "folk",
      "mood": "sentimental"
    },
    {
      "titulo": "Mr. Brightside", 
      "autor": "The Killers",
      "URL": "/song/2",
      "genero": "rock",
      "mood": "onFire"
    },
    {
      "titulo": "Seize the day", 
      "autor": "Avenged Sevenfold",
      "URL": "/song/3",
      "genero": "heavy",
      "mood": "blue",
    }
    ];
    catalogoCancionesFiltradas: object[] = this.catalogoCanciones;

  constructor() {
    this.catalogoCancionesFiltradas = this.catalogoCancionesFiltradas.filter(
      function (item) {
      return !item["genero"].includes("pop");
   }
    );
  }

}

  // filtrarCancionesPor(categoria: string, palabraClave:string){
  //   this.catalogoCancionesFiltradas.forEach(element => {
  //     if(element[categoria] !== palabraClave){
  //       this.catalogoCancionesFiltradas.filter(element);
  //     }
  //   }); 
  // }
      



