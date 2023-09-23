import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

import { CreatorsCardMenuInterface } from './models/creators-card-menu.interface';
import { CreatorsCardMenuService } from './services/creators-card-menu.service';

@Component({
  selector: 'app-creators',
  standalone: true,
  imports: [CommonModule, CardModule],
  providers: [CreatorsCardMenuService],
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorsComponent {
  public readonly cardsMenu: CreatorsCardMenuInterface[] = this.creatorsCardMenuService.getCardMenu;

  constructor(private creatorsCardMenuService: CreatorsCardMenuService) {}
}
