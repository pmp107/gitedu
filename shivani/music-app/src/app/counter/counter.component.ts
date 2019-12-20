import { Component, OnInit, OnDestroy, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,OnDestroy,OnChanges {

  


  constructor() { 
    
  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

  ngOnChanges(){

  }

  @Input()
  childCounter:number;

  @Output()
  changeCounter:EventEmitter<number>=new EventEmitter<number>();
  

  increment(){

    this.changeCounter.emit(++this.childCounter);
  }

  decrement(){
    this.changeCounter.emit(--this.childCounter);
  }
}
