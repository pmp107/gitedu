import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../service/task.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
//title:string;
upload:Blob;
  constructor(private ts:TaskService) { 

  }

  ngOnInit() {
  }

  Add(e: { preventDefault: () => void; })
  {
    e.preventDefault();
    //console.log(this.title);
    console.log(this.upload);
    this.ts.addTask(this.upload).subscribe((data)=>
    console.log("task added"));

    
  }
}


