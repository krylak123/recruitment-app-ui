import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CreatorsCardMenuInterface } from '@views/main/views/creators/models/creators-card-menu.interface';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-creators',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorsComponent {
  public readonly cardsMenu: CreatorsCardMenuInterface[] = [
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
}
