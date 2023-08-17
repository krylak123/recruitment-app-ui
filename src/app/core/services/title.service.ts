import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const title: string | undefined = this.buildTitle(snapshot);

    this.title.setTitle(`${title ?? '- title -'} | appName`);
  }
}
