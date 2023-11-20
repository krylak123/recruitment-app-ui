import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskExamComponent } from './task-exam.component';

describe(TaskExamComponent.name, () => {
  let component: TaskExamComponent;
  let fixture: ComponentFixture<TaskExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaskExamComponent],
    });
    fixture = TestBed.createComponent(TaskExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
