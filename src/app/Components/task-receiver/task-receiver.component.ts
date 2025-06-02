import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../../Services/todo-service.service';
@Component({
  selector: 'app-task-receiver',
  imports: [CommonModule],
  templateUrl: './task-receiver.component.html',
  styleUrl: './task-receiver.component.scss'
})
export class TaskReceiverComponent {
  receivedTask: string = '';
   tasks: string[] = [];
  constructor(private todoService: TodoServiceService) { }

  // ngOnInit() {
  //   this.todoService.task$.subscribe((task) => {
  //     if (task) {
  //       this.receivedTask = task;
  //     }
  //   });
  // }
   ngOnInit() {
    this.todoService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(index: number) {
    this.todoService.deleteTask(index);
  }
}
