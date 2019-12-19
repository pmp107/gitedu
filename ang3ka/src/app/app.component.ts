import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-app';

  parentIncrement:number=0;

  incrementParent(count)
  {
    console.log("Increment: "+count);
    this.parentIncrement=count;
  }

  decrementParent(count){
    console.log("Decrement: "+count);
    this.parentIncrement=count;
  }

  
}
