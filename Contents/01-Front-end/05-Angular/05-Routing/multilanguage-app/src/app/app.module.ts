import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { HomeEsComponent } from './home-es/home-es.component';

const RouterConfig: Routes = [
  {"path": "", "component": AppComponent},
  {"path":"home-en", "component": HomeEnComponent},
  {"path":"home-es", "component": HomeEsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeEnComponent,
    HomeEsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
