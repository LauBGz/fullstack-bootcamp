import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(public _user: UserService) { 
  }

  ngOnInit(): void {
  }


  login(){
    let username = (<HTMLInputElement>document.querySelector(".miUser")).value;
    let password = parseInt((<HTMLInputElement>document.querySelector(".miPass")).value);
  
    this._user.login(username, password)
   }



}
