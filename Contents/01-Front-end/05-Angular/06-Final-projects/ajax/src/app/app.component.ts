import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//HttpHeaders: solo si queremos mandar headers.
//Tipo de dato de la respuesta
import {Observable} from 'rxjs'//Parte importante: las llamadas no se hacen con callbacks, se hacen con observables.
//Un observable es un "tipo de dato" que es la evolución de una promesa y que representa un flujo de datos.

//Servicio que viene dentro del HTTP Module y que sirve para hacer llamadas http

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajax';

  joke: string ="";

  constructor(public _http: HttpClient){

    //Esta variable sirve para empaquetar los headers y pasarlos como argumento al
    //http get
    let httpConfig: object = {
      "headers": new HttpHeaders({
        "content-type": "application/json",
      })
    }
    //Argumentos: primero URL, segundo body, tercer headers
      _http.put("https://reqres.in/api/users", {
        "name": "morpheus",
        "job": "leader"
      }, httpConfig)
      //argumento extra: body
      .subscribe((responseAPI) => { 
        console.log(responseAPI);
      });
      //llamada get
      //la función devuelve un "contrato" (observable): como un acuerdo de que cuando se resuelva la petición
      //se devolverá la respuesta. Nos subscribimos al osbservable para que cuando la API responda
      //nos devuelva la respuesta.
  
  }

}
