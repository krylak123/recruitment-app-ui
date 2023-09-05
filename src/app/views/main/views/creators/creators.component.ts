import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreatorsCardMenuInterface } from '@views/main/views/creators/models/creators-card-menu.interface';
import { CreatorsCardMenuService } from '@views/main/views/creators/services/creators-card-menu.service';
import { CardModule } from 'primeng/card';

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
