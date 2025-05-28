import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { HobbiesComponent } from './Components/hobbies/hobbies.component';
import { EducationComponent } from './Components/education/education.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full' 
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path :'dashboard',
      component:DashboardComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'hobbies',
      component:HobbiesComponent
    },
    {
      path:'education',
      component:EducationComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'contact-form',
      component:ContactFormComponent
    },
    {
      path:'reactive-form',
      component:ReactiveFormComponent
    }
];
