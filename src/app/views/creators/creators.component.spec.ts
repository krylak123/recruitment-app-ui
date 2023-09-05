import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatorsComponent } from 'src/app/views/creators/creators.component';

describe('CreatorsComponent', () => {
  let component: CreatorsComponent;
  let fixture: ComponentFixture<CreatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatorsComponent],
    });
    fixture = TestBed.createComponent(CreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
