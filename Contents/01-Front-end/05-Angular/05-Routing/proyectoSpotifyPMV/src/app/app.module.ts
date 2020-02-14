import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CancionComponent } from './cancion/cancion.component';
import { NavbarComponent } from './navbar/navbar.component';

const RouterConfig: Routes = [
  {"path": "", "component": CatalogoComponent},
  {"path":"home", "component": CatalogoComponent},
  {"path":"song/:indice", "component": CancionComponent},

  //Pasar el parametro al constructor de canción
];


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    CancionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
