import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReceiverComponent } from './task-receiver.component';

describe('TaskReceiverComponent', () => {
  let component: TaskReceiverComponent;
  let fixture: ComponentFixture<TaskReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskReceiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
