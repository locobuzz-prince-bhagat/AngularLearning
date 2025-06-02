import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-input',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export class TodoInputComponent {
    @Output() taskAdded = new EventEmitter<string>();
   todoForm = new FormGroup({
    taskText: new FormControl('', Validators.required)
  });

  submitTask() {
    const value = this.todoForm.value.taskText?.trim();
    if (value) {
      this.taskAdded.emit(value);
      this.todoForm.reset();
    }
  }
}
