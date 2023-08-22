import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { APP_NAME } from '@shared/constants/app-name.constants';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private translateService: TranslateService
  ) {
    super();
  }

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    let title: string | undefined = this.buildTitle(snapshot);

    if (title) title = this.translateService.instant(title);

    this.title.setTitle(`${title ?? '- set title -'} | ${APP_NAME}`);
  }
}
