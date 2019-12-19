import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit,OnChanges,OnDestroy {

  @Input()
  childCounter:number=0;

  @Output()
  sendCounter:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

    console.log("sab ek baar hi paida hote h")
  }

  increment()
  {
    this.sendCounter.emit(++this.childCounter);
  }

  decrement(){
    this.sendCounter.emit(--this.childCounter);
  }

  ngOnChanges(){
    console.log("with time everything changes ye to fir bhi function h")
  }
  
  ngOnDestroy(){
    console.log("sab immortal hai marna to h hi");
  }
}
