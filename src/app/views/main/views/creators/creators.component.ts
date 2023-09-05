import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
      label: 'Pytanie',
      routerCommand: (): void => console.log('question'),
    },
  ];
}
