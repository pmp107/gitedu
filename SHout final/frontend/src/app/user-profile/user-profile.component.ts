import { Component, OnInit } from '@angular/core';
import { SuggestedUsers } from '../SuggestedUsers';
import { AuthService } from '../services/auth.service';

import { TokenService } from '../services/token.service';
import { SuggestedUserService } from '../services/suggested-user.service';
import { DataService } from '../services/data.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users:SuggestedUsers[]=[];
  curuser:SuggestedUsers[];
  public loggedIn:boolean;
  post11: any;
  cur:any;
  friend_r:any;
username:string;

  constructor(private auth:AuthService,
    
    private Token: TokenService,
    private ser:SuggestedUserService,
    private data1:DataService) {
    
   
      this.curuser=this.Token.getuser();
     // console.log(this.curuser);
     this.getPost();
   
   }


  ngOnInit() {

    this.getSuggestedUsers();
     // console.log(localStorage.getItem('user'));
    // console.log(user.id);
  }

  getcurrent()
{
  this.Token.getuser().subscribe((all)=>{
    this.curuser=all;
  });
}


  getSuggestedUsers(){
    
  this.ser.getUsers().subscribe((all)=>{
  
this.users=all;

        //console.log(this.users);
  });
  }


  getPost() {
    this.data1.getData().subscribe(res => { this.post11 = res });
  }
 
  addfrnd(id)
  {
    alert("friend request sent");
  }
}
