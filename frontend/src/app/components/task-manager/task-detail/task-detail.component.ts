import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Task } from 'src/app/Task';
import {TaskService} from '../../../service/task.service';

 @Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
task:Task;
  constructor(private route:ActivatedRoute,private taskservices:TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
    this.taskservices.getOne(data.id).subscribe((tsk)=>{
      this.task=tsk;
      console.log(this.task.upload);

    });

  });
  }
}
