import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  name = 'john doe';
  today = new Date();
  price = 1000;
  discount = 0.25;

  submitForm() {
    console.log(this.contact);
    alert('Form Submitted!');
  }
}
