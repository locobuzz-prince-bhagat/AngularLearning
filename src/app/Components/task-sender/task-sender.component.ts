import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '../../Services/todo-service.service';

@Component({
  selector: 'app-task-sender',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-sender.component.html',
  styleUrl: './task-sender.component.scss'
})
export class TaskSenderComponent {
    taskText: string = '';
    constructor(private todoService: TodoServiceService) {}
    sendTask() {
    if (this.taskText.trim()) {
      this.todoService.sendTask(this.taskText);
      this.taskText = '';
    }
  }
}
