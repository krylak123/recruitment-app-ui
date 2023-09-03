import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { environment } from '@envs/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, TranslateModule, ProgressSpinnerModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private router: Router
  ) {
    console.log('ProdMode: ', environment.PRODUCTION);
  }

  public get isLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  public ngOnInit(): void {
    this.translateService.setDefaultLang('pl');
    this.translateService.use('pl');

    this.setUpPrimeNGConfig();
    this.handleLazyLoadingLoader();
  }

  private setUpPrimeNGConfig(): void {
    this.primengConfig.ripple = true;
  }

  private handleLazyLoadingLoader(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.isLoading.next(true);
      }
      if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
        this.isLoading.next(false);

        window.scrollTo(0, 0);
      }
    });
  }
}
