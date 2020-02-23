import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrorEmpleadosComponent } from './registror-empleados/registror-empleados.component';
import { FormularioAddComponent } from './formulario-add/formulario-add.component';
import { FormularioModifiyComponent } from './formulario-modifiy/formulario-modifiy.component';
import { DataServiceService } from './servicios/data-service.service';


const RouterConfig: Routes = [
  {"path": "", "component": RegistrorEmpleadosComponent},
  {"path": "home", "component": RegistrorEmpleadosComponent},
  {"path": "add", "component": FormularioAddComponent},
  {"path": "modify", "component": FormularioModifiyComponent},
]; 

@NgModule({
  declarations: [
    AppComponent,
    RegistrorEmpleadosComponent,
    FormularioAddComponent,
    FormularioModifiyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(RouterConfig, {useHash: true}),
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
