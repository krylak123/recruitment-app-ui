import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PushPipe } from '@ngrx/component';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BehaviorSubject, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule, PushPipe],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public readonly homeBreadcrumb: MenuItem = { icon: 'pi pi-home', routerLink: '/main' };
  public breadcrumbs$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.breadcrumbs$.next(this.buildBreadCrumb(this.aRoute.root));
    this.handleChangeRoute();
  }

  private handleChangeRoute(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs$.next(this.buildBreadCrumb(this.aRoute.root));
      });
  }

  private buildBreadCrumb(route: ActivatedRoute, url = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    const path: string | undefined = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const nextUrl: string = path ? `${url}/${path}` : url;

    const breadcrumb: MenuItem = {
      label,
      routerLink: '/main' + nextUrl,
    };

    const newBreadcrumbs: MenuItem[] = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
