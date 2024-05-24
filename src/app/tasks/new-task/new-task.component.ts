import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task/task.model';
import { TaksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required:true}) userId!:string;
  
  @Output() close = new EventEmitter<void>();

  @Output() add = new EventEmitter<newTask>();
  

  title = '';

  summary = '';

  date = '';

  constructor(private taskService:TaksService){

  }

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
   this.taskService.addTask({
    title: this.title,
    summary: this.summary,
    date: this.date
   },
   this.userId)

   this.close.emit()
  }

}
