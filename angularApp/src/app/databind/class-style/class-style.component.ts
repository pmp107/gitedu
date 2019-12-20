import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  mypro:boolean=false;
  mystyle1:string="15px";
  mltStyle = {
      'background':'red',
      'border':'10px solid green'
  }
  ngOnInit() {
  }

}
