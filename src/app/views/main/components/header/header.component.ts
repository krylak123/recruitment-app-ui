import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '@backend/users';
import { AppState } from '@core/store/app.reducer';
import { AuthActions, selectAuthUser } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserNamesPipe } from '@shared/pipes';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SplitButtonModule, TranslateModule, MenubarModule, UserNamesPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly menuItems: MenuItem[] = [
    {
      label: this.translateService.instant('MENU.CREATORS'),
      icon: PrimeIcons.PLUS,
      command: (): Promise<boolean> => this.router.navigate(['main/creators']),
    },
    {
      label: this.translateService.instant('MENU.TASKS'),
      icon: PrimeIcons.TAG,
      command: (): void => console.log('router'),
    },
    {
      label: this.translateService.instant('MENU.RECRUITMENTS'),
      icon: PrimeIcons.DATABASE,
      command: (): void => console.log('router'),
      items: [
        {
          label: this.translateService.instant('MENU.CURRENT'),
          command: (): void => console.log('router current'),
        },
        {
          label: this.translateService.instant('MENU.ARCHIVED'),
          command: (): void => console.log('router archives'),
        },
      ],
    },
    {
      label: this.translateService.instant('MENU.USERS'),
      icon: PrimeIcons.USERS,
      items: [
        {
          label: this.translateService.instant('MENU.CANDIDATES'),
          command: (): void => console.log('router candidates'),
        },
        {
          label: this.translateService.instant('MENU.EMPLOYEES'),
          command: (): void => console.log('router workers'),
        },
      ],
    },
  ];
  public readonly userBtnItems: MenuItem[] = [
    {
      label: this.translateService.instant('BUTTON.LOGOUT'),
      icon: 'pi pi-sign-out',
      command: (): void => this.store.dispatch(AuthActions.logout()),
    },
  ];
  public user$: Observable<UserInterface | null> = this.store.select(selectAuthUser);

  constructor(
    private store: Store<AppState>,
    private translateService: TranslateService,
    private router: Router
  ) {}

  public goProfile(): void {
    console.log('go to profile');
  }
}
