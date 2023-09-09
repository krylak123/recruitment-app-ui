import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CreatorsCardMenuInterface } from '@views/main/views/creators/models/creators-card-menu.interface';

@Injectable()
export class CreatorsCardMenuService {
  private readonly cardsMenu: CreatorsCardMenuInterface[] = [
    {
      label: this.translateService.instant('BUTTON.QUESTION'),
      routerCommand: (): Promise<boolean> => this.router.navigate(['questions'], { relativeTo: this.aRoute }),
    },
  ];

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private translateService: TranslateService
  ) {}

  public get getCardMenu(): CreatorsCardMenuInterface[] {
    return this.cardsMenu;
  }
}
