import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data=null;
  constructor(private _userserve:UserService) { }
  myuser:any;
  ngOnInit() {
    // this._userserve.getUser(this.data);
    // this.myuser=this._userserve.user;
    // console.log(this.myuser);
  }

}
