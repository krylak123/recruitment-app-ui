import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionCloseResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { ListComponent } from '@shared/components';
import { ListColumnsInterface } from '@shared/components/list';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState } from '@shared/store';
import { TaskExamDetailsModalComponent } from '@views/main/views/tasks/views/task-exam/components/task-exam-details-modal/task-exam-details-modal.component';
import { TaskQuestionCloseDetailsModalComponent } from '@views/main/views/tasks/views/task-question/components/task-question-close-table/components/task-question-close-details-modal/task-question-close-details-modal.component';
import { ButtonModule } from 'primeng/button';

import { TaskQuestionCloseTableConfigService } from './services/task-question-close-table-config.service';

@Component({
  selector: 'app-task-question-close-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ListComponent,
    TranslateModule,
    TaskExamDetailsModalComponent,
    TaskQuestionCloseDetailsModalComponent,
  ],
  providers: [TaskQuestionCloseTableConfigService],
  templateUrl: './task-question-close-table.component.html',
  styleUrls: ['./task-question-close-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskQuestionCloseTableComponent {
  @Input({ required: true }) public list!: ListResponseInterface<QuestionCloseResponseInterface> | null;
  @Input({ required: true }) public listCallState!: CallState | null;
  public columns: ListColumnsInterface[] = this.tableConfigService.getTableValues();
  public itemDetails: QuestionCloseResponseInterface | null = null;
  public detailsModalIsVisible = false;

  constructor(
    private router: Router,
    private tableConfigService: TaskQuestionCloseTableConfigService
  ) {}

  public handleShowDetails(question: QuestionCloseResponseInterface): void {
    this.itemDetails = question;
    this.detailsModalIsVisible = true;
  }

  public goAdd(): void {
    this.router.navigate(['main/creators/questions']).then();
  }
}
