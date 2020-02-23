import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public datosEmpleadosBase: any;
  public datosEmpleados: any;
  public endpoint:string = "https://proxy-neoland.ga";
  public id: any;
  public data: object;
  public datosGuardados: object;



  constructor(public _http: HttpClient){
 
     const httpConfig:  object = {
      "headers": new HttpHeaders({
        "content-type": "application/json",
      })
    }

    this.imprimirEmpleados(), httpConfig;
  }

  imprimirEmpleados (){
    this._http.get(`${this.endpoint}/users`)
    .subscribe((responseAPI) => { 
      this.datosEmpleadosBase = responseAPI;
      this.datosEmpleados = this.datosEmpleadosBase;
      
      
      console.log(this.datosEmpleadosBase)
    }
    )};

  borrarEmpleado (indice){
    let empleadoEliminado = this.datosEmpleados[indice]["id"];

    this._http.delete(`${this.endpoint}/user/${empleadoEliminado}`)
    .subscribe((responseAPI) => { 
    })
    this.imprimirEmpleados ()
  };

  actualizarEmpleado (data){
    let httpConfig: object = {
      "headers": new HttpHeaders({
        "content-type": "application/json",
      })
    }

 
     this._http.put(`${this.endpoint}/users`, data, httpConfig)
        .subscribe((responseApi) => {
  ​         console.log(responseApi);
        });
        this.imprimirEmpleados ()
    
 
  };


}



  