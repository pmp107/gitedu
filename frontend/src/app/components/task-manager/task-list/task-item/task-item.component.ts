import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../../Task';
import {TaskService} from '../../../../service/task.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input()task:Task;
  constructor(private ts :TaskService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.task.id);

  }

Delete()
{ 
 this.ts.deleteTask(this.task.id).subscribe((data)=>{
    console.log('task deleted :',data.id);
  });
}
}
