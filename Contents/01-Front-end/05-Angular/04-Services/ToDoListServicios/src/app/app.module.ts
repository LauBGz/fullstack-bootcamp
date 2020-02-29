import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

import { Routes, RouterModule } from '@angular/router';

const RouterConfig: Routes = [
  {"path": "", "component": AddComponent},
  {"path": "home", "component": AddComponent},
  {"path": "list", "component": ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
