import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPeriodicosService {

  public datosPeriodicos: any;

  constructor(public _http: HttpClient) { 
 
    _http.get("http://newsapi.org/v2/everything?q=Animals&apiKey=d601a353bd364006b31dcbe850c0e560")
    .subscribe((responseAPI) => { 
      this.datosPeriodicos = responseAPI;
      console.log(this.datosPeriodicos);
    }); 
    
  }

  getDatosPeriodicos(){
    return this.datosPeriodicos;
  }
  getDatos(i,clave){
    return this.datosPeriodicos["articles"][i][clave];
  }

}
