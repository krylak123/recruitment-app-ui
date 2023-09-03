import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppState } from '@core/store/app.reducer';
import { AuthActions } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SplitButtonModule, TranslateModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public readonly headerBtnItems: MenuItem[] = [
    {
      label: this.translateService.instant('BUTTON.LOGOUT'),
      icon: 'pi pi-sign-out',
      command: (): void => this.store.dispatch(AuthActions.logout()),
    },
  ];

  constructor(
    private store: Store<AppState>,
    private translateService: TranslateService
  ) {}

  public goProfile(): void {
    console.log('go to profile');
  }
}
