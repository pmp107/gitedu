import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {

  public name : string;
  public characterPlayed : string;
  public isHandsome : boolean;

  constructor() { }

 

}
