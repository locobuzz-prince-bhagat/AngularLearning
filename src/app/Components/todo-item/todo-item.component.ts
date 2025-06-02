import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
   templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],

})
export class TodoItemComponent {
  @Input() task!: { text: string; done: boolean };
  @Input() id!: number;

  @Output() delete = new EventEmitter<void>();
  @Output() toggleDone = new EventEmitter<void>();
}
