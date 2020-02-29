import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AjaxComponent } from './ajax/ajax.component';

const RouterConfig: Routes = [
  {"path": "", "component": AjaxComponent},
  {"path": "home", "component": AjaxComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
