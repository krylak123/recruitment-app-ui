import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorExamComponent } from './creator-exam.component';

describe('CreatorExamComponent', () => {
  let component: CreatorExamComponent;
  let fixture: ComponentFixture<CreatorExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatorExamComponent],
    });
    fixture = TestBed.createComponent(CreatorExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
