// import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-todo-list',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.scss']
// })
// export class TodoListComponent {
//   todoForm: FormGroup;
//   tasks: { text: string; done: boolean }[] = [];

//   constructor() {
//     this.todoForm = new FormGroup({
//       taskText: new FormControl('', Validators.required)
//     });
//   }

//   addTask() {
//     console.log('Add task called', this.todoForm.value);
//     const taskValue = this.todoForm.value.taskText?.trim();
//     if (taskValue) {
//       this.tasks.push({ text: taskValue, done: false });
//       this.todoForm.reset();
//     }
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   toggleDone(index: number) {
//     this.tasks[index].done = !this.tasks[index].done;
//   }
// }

import { Component } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TaskReceiverComponent } from '../task-receiver/task-receiver.component';
import { TaskSenderComponent } from '../task-sender/task-sender.component';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,TodoItemComponent,TodoInputComponent,TaskReceiverComponent,TaskSenderComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: { text: string; done: boolean }[] = [];

  addTask(text: string) {
    this.tasks.push({ text, done: false });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}

