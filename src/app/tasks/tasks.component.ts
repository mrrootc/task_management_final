import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTask } from './task/task.model';
import { TaksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddindTask:boolean = false;
  
  constructor(private taskService: TaksService){

  }

  get selectedUserTasks() {
   return this.taskService.getUserTask(this.userId)
  }


  onAddingTask(){
    this.isAddindTask = true;
  }

  onClose(){
    this.isAddindTask = false;
  }

  
}
