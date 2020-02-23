import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _user: UserService) { }


  ngOnInit(): void {
  }

  ​
  logout(){
    this._user.logout()
  }
}
