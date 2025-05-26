import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-hobbies',
  imports: [
    CommonModule
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
    hobbies = ['Coding', 'Reading', 'Gaming'];
     showList = true;
}
