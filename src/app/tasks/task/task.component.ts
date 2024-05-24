import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TaksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;


  constructor(private tasksService:TaksService){
    
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
