import { Component } from '@angular/core';
import { ActorComponent } from './actor/actor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-app';
  message= 'Single Page Applications have become a way of website development';
  parentCounter:number;
  
  constructor(){
    this.parentCounter=0;
  }

  actor:ActorComponent = {
  name : 'Amrish Puri',
  characterPlayed : 'Mogambo',           
  isHandsome : false 
  }

  displayMessage() {           
    alert('Welcome to the world of Angular JS 4'); 
  }

  getColor(city) { (2)
    switch (city) {
      case 'Delhi':
        return 'green';
      case 'Mumbai':
        return 'blue';
      case 'Goa':
        return 'red';
      case 'Pune':
        return 'grey';
      case 'Sawantwadi':
        return 'orange';
    }
  }

  cities: any[] = [
    {
      "city":"Delhi"
    },
    {
      "city":"Mumbai"
    },
    {
      "city":"Goa"
    },
    {
      "city":"Pune"
    },
    {
      "city":"Sawantwadi"
    }
  ];


  onIncrement(count:number){
    console.log(count);
    this.parentCounter=count;
  }

  



}
