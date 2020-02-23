import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean = false;

  userdataDummy: object = {"username": "hola", "password": 1234} 

  //FUNCION PARA OBTENER DATOS
  getUserData(){
    ​
      }

  //FUNCION PARA ESTABLECE DATOS
  setUserData(){
    ​
      }

 
  login (username:string, password:number){
    if(username === this.userdataDummy["username"] && password === this.userdataDummy["password"]){
      this.isLogged = true;
    }
  }

  logout(){
    
    this.isLogged = false;

  }

  constructor() { }
}
