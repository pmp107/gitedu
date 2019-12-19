import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  dyName:string="Prathamesh";
  surname:boolean=true;
  num:number=44+44;
 myMethod(){
   return "My Name is " + this.dyName
 }
}
