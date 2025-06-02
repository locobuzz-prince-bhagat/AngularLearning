import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSenderComponent } from './task-sender.component';

describe('TaskSenderComponent', () => {
  let component: TaskSenderComponent;
  let fixture: ComponentFixture<TaskSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
