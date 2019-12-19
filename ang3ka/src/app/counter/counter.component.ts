import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
@Input()
childCounter:number;

@Output()
sendCounter:EventEmitter<number>=new EventEmitter<number>();



onClick(){
  this.sendCounter.emit(++this.childCounter);
}

onClick1(){
  this.sendCounter.emit(--this.childCounter);
}

}
