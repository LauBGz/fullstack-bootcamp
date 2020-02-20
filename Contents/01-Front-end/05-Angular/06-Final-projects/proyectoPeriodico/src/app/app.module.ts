import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TitularesComponent } from './titulares/titulares.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DataPeriodicosService } from './servicios/data-periodicos.service';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';

const RouterConfig: Routes = [
  {"path": "", "component": TitularesComponent},
  {"path": "home", "component": TitularesComponent},
  {"path": "articulo/:id", "component": ArticuloComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TitularesComponent,
    ArticuloComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataPeriodicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
