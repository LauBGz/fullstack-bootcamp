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
      "mood": "good",
      "idioma": "inglés"
    },
    {
      "titulo": "Miña terra galega", 
      "autor": "Siniestro Total",
      "URL": "/song/1",
      "genero": "folk",
      "mood": "sentimental",
      "idioma": "español"
    },
    {
      "titulo": "Mr. Brightside", 
      "autor": "The Killers",
      "URL": "/song/2",
      "genero": "rock",
      "mood": "onFire",
      "idioma": "inglés"
    },
    {
      "titulo": "Seize the day", 
      "autor": "Avenged Sevenfold",
      "URL": "/song/3",
      "genero": "heavy",
      "mood": "blue",
      "idioma": "inglés"
    }
    ];
    

  constructor() { 
    
   }

  //Catálogo a mostrar al usuario es igual al catálogo original
  catalogoCancionesFiltradas: object[] = this.catalogoCanciones;
  //Función que recibe el parámetro de la categoría y su valor
  filtrarCancionesPor(categoria:string, propiedadCategoria:string){
    //Recorrido por el array de objetos para encontrar las categorías y propiedades
    //que coinciden y pasar esos objetos filtrados al array a mostrar
    this.catalogoCanciones.forEach(element => {
      this.catalogoCancionesFiltradas = this.catalogoCanciones.filter(
          element => element[categoria] === propiedadCategoria)
    });
  }

}
      



