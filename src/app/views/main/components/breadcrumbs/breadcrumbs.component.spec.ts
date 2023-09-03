import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbsComponent } from 'src/app/views/main/components/breadcrumbs/breadcrumbs.component';

describe(BreadcrumbsComponent.name, () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreadcrumbsComponent],
    });
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
