import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbsComponent } from '@views/main/components/breadcrumbs/breadcrumbs.component';

describe(BreadcrumbsComponent.name, () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreadcrumbsComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
