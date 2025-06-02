import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
  // private taskSubject = new BehaviorSubject<string>(''); // Holds latest task
  // task$ = this.taskSubject.asObservable(); // Observable for subscription

  // sendTask(task: string) {
  //   this.taskSubject.next(task);
  // }
    private tasksSubject = new BehaviorSubject<string[]>([]); // Array of tasks
  tasks$ = this.tasksSubject.asObservable();

  sendTask(task: string) {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...currentTasks, task]); // Add new task
  }

  deleteTask(index: number) {
    const currentTasks = this.tasksSubject.getValue();
    currentTasks.splice(index, 1);
    this.tasksSubject.next([...currentTasks]); // Emit updated tasks array
  }
  
}
