import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorComponent } from './error/error.component';

import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';

const RouterConfig: Routes = [
  {"path": "", "component": HomeComponent},
  {"path": "login", "component": LoginComponent},
  {"path": "checkout", "component": CheckoutComponent},
  {"path": "detalle/:nombreProducto", "component": ProductoComponent},
  //ruta fija más nombre del parámetro
  {"path": "**", "component": ErrorComponent}
];  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CheckoutComponent,
    ErrorComponent,
    NavbarComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
