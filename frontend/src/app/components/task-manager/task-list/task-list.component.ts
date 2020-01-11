import { Component, OnInit } from '@angular/core';
import {Task} from '../../../Task';
import {TaskService} from '../../../service/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {



  tasks:  Task[]=[];
  constructor(private taskservice:TaskService) { }

  ngOnInit() {

    this.getAllTasks();
  }
getAllTasks()
{
this.taskservice.getTasks().subscribe((all)=>{
  this.tasks=all;
  console.log(this.tasks);

});
}
}
