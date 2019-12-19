import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musicapp';
  parentCounter:number;

  constructor(){
    this.parentCounter=0;
  }
incrementparentCounter(count:number)
{
  this.parentCounter=count;

}

decrementparentCounter(count:number)
{
  this.parentCounter=count;

}

}
