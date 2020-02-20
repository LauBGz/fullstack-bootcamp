import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPeriodicosService {

  public datosPeriodicosBase: any;
  public datosPeriodicos: any;

  constructor(public _http: HttpClient) { 
 
    this.loadNews();

  }

  loadNews() {
    
    this._http.get("http://newsapi.org/v2/everything?q=Animals&apiKey=d601a353bd364006b31dcbe850c0e560")
    .subscribe((responseAPI) => { 
      this.datosPeriodicosBase = responseAPI;
      this.datosPeriodicos = this.datosPeriodicosBase;
      console.log(this.datosPeriodicos);
    }); 

  }

  getDatosPeriodicos(){
    return this.datosPeriodicos;
  }

    filtrar(textoBusqueda){

      textoBusqueda = textoBusqueda.toLowerCase();

      console.log(textoBusqueda)

      if(textoBusqueda === ""){
       this.loadNews();
        
      } else{
        console.log("hola")
        this.datosPeriodicos = [];

        for(let i=0; this.datosPeriodicosBase["articles"].length; i++){
          let articulo = this.datosPeriodicosBase["articles"][i];
          let encontradoNombre = articulo["title"].toLowerCase().indexOf(textoBusqueda) !== -1;
          let encontradoDescription = articulo["description"].toLowerCase().indexOf(textoBusqueda) !== -1;

          if (encontradoNombre || encontradoDescription) {
            
            this.datosPeriodicos.push(articulo);

          }
        }
      }
    }

  getDatos(i,clave){
    return this.datosPeriodicos["articles"][i][clave];
  }

}
