import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//SERVICIOS
import { UserService } from './servicios/user.service';
  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
