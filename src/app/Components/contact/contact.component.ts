import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  userName: string = 'prince-bhagat';
  phoneNumber: string = '8769944633';
  emailId: string = 'prince.bhagat@locobuzz.com';
}
