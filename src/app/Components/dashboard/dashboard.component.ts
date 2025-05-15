import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  isNavbarOpen: boolean = false;
   // ✅ Dummy notes to display in the dashboard
 dummyNotes = [
  { title: 'Note 1', content: 'This is the content of note 1.' },
  { title: 'Note 2', content: 'Reminder to check emails.' },
  { title: 'Note 3', content: 'To-Do: Finish Angular project.' },
  { title: 'Note 4', content: 'Meeting at 3 PM.' },
  { title: 'Note 5', content: 'Read design documentation.' }
];

  ngOnInit(): void {
   
  }
    toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }


}
