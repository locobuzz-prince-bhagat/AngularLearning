import { AfterViewInit, Component, ElementRef,ViewChild } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  title = 'Milestone1';
  name="Prince";
  image="https://picsum.photos/200"
  count=0;
  userName : string="" ;
  @ViewChild('nameRef') nameElementRef!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      this.nameElementRef.nativeElement.focus();
    });
  }
  incrementValue(){
    this.count+=1;
  }
  greetPrince(updatedValue:string){
    this.userName=updatedValue;
    if(updatedValue=="Prince"){
      alert('Welcome back Prince');
    }
  }
}
