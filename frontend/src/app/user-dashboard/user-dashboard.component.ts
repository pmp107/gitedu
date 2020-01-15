import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  myUser:Iuser[];
  filter:string;

  constructor(private r:Router) { 
    this.myUser=[ {
      //id: [113,Validators.required],
      username: "jana ",
      friend_id: 113,
      email_id:'janadavangave18@gmail.com',
      passward: '65tguidggk',
      confirm_passward: " dqjkhjkasd",
      flag:true,
    


    }, {
      //id: [113,Validators.required],
      username: "dakshu ",
      friend_id: 114,
      email_id:'janadavangave18@gmail.com',
      passward: '65tguidggk',
      confirm_passward: " dqjkhjkasd",
      flag:true,
    


    }]
  }

  ngOnInit() {
  }

  addUser(user:Iuser){

    this.r.navigate(['addUser/'+user.username]);
    }
    deleteUser(){
        this.r.navigate(['deleteUser']);
      }
    
      

}
