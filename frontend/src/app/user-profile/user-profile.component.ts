import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { ActivatedRoute, Params } from '@angular/router';
import { FriendService } from '../shared/friend.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  user:Iuser;
username:string;

  constructor(private a:ActivatedRoute,private friendServ:FriendService) {
    
   
    this.a.params.subscribe((p:Params)=>this.username=p.username);
    console.log(this.username);
    this.user=this.friendServ.getFriendByUsername(this.username);
   }


  ngOnInit() {
  }

}
