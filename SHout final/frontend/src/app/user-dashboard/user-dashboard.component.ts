import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  filter:string;

  constructor(private r:Router) { 
    
  }

  ngOnInit() {
  }

 
    
      

}
