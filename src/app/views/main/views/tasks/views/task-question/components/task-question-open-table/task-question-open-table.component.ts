import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionOpenResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { ListColumnsInterface, ListComponent } from '@shared/components/list';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState } from '@shared/store';
import { ButtonModule } from 'primeng/button';

import { TaskQuestionOpenTableConfigService } from './services/task-question-open-table-config.service';

@Component({
  selector: 'app-task-question-open-table',
  standalone: true,
  imports: [CommonModule, ButtonModule, ListComponent, TranslateModule],
  providers: [TaskQuestionOpenTableConfigService],
  templateUrl: './task-question-open-table.component.html',
  styleUrls: ['./task-question-open-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskQuestionOpenTableComponent {
  @Input({ required: true }) public list!: ListResponseInterface<QuestionOpenResponseInterface> | null;
  @Input({ required: true }) public listCallState!: CallState | null;
  public columns: ListColumnsInterface[] = this.tableConfigService.getTableValues();

  constructor(
    private router: Router,
    private tableConfigService: TaskQuestionOpenTableConfigService
  ) {}

  public goAdd(): void {
    this.router.navigate(['main/creators/questions']).then();
  }
}
