import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../servicios/data-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-registror-empleados',
  templateUrl: './registror-empleados.component.html',
  styleUrls: ['./registror-empleados.component.css']
})
export class RegistrorEmpleadosComponent{

  formData: any = {};
  formDataUpdated: any = {
  };

  constructor(public _data : DataServiceService, public _http: HttpClient) { 
  }

  borrarEmpleado(id: any ){
    this._data.borrarEmpleado(id);
  }

  actualizarEmpleado(id: any ){
    this._data.actualizarEmpleado(id);
    console.log(id)
  }

  submitData(){   //esta funcion envia los datos del formulario
    console.log(this.formData) // console log de los datos que se van escribiendo en el formulario
    alert("Datos Enviados!")
​
    this.subirEmpleado()
    
    return true;
  }

  submitDataUpdated(){   //esta funcion envia los datos del formulario
    console.log(this.formDataUpdated) // console log de los datos que se van escribiendo en el formulario
    alert("Datos Enviados!")
​
    this.actualizarEmpleado(this.formDataUpdated)
    
    return true;
  }


  subirEmpleado() {
        return this._http.post(`${this._data.endpoint}/users`, this.formData)
          .subscribe((responseApi) => {
    ​         this._data.imprimirEmpleados()
          });
      }



}
