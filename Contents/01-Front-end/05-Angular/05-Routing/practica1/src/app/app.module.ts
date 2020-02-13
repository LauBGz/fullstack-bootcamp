import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';

import { Routes, RouterModule } from '@angular/router';
import { VistaErrorComponent } from './vista-error/vista-error.component';

//Crear variable con un nuevo tipo de dato llamado routes
//Routes es un array de objetos
const RouterConfig: Routes = [
  {"path": "", "component": Vista1Component},
  //Path vacío para que la pongas home o pongas nada
  //por defecto se muestre un componente
  {"path":"home", "component": Vista1Component},
  {"path":"album", "component": Vista2Component},
  {"path":"**", "component": VistaErrorComponent}
  // ** cualquier otra ruta llevará a la vista error 404
  //Siempre va en último lugar 
];
//Aquí se asocia cada componente con una ruta

@NgModule({
  declarations: [
    AppComponent,
    Vista1Component,
    Vista2Component,
    VistaErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true}) // Importamos el módulo
    //y darle configuración
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
