import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

import { TasksCardMenuInterface, TasksCardMenuService } from './services/tasks-card-menu.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, CardModule],
  providers: [TasksCardMenuService],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  public readonly cardsMenu: TasksCardMenuInterface[] = this.creatorsCardMenuService.getCardMenu;

  constructor(private creatorsCardMenuService: TasksCardMenuService) {}
}
