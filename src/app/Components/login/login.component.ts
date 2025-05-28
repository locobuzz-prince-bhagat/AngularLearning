import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormsModule,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      emailOrUsername: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
   LoginSubmit(): void {
  console.log('LoginSubmit clicked');  // ✅ Add this
  if (this.loginForm.valid) {
    const formValues = this.loginForm.value;
    console.log('Form Submitted:', formValues);
  } else {
    console.log('Form is invalid');
    this.loginForm.markAllAsTouched();
  }
}


  

}
