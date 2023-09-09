import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CreatorsComponent } from '@views/main/views/creators/creators.component';

describe(CreatorsComponent.name, () => {
  let component: CreatorsComponent;
  let fixture: ComponentFixture<CreatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatorsComponent, RouterTestingModule, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(CreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
