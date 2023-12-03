import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamResponseInterface } from '@backend/exams';
import { TranslateModule } from '@ngx-translate/core';
import { ListColumnsInterface, ListComponent } from '@shared/components/list';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { TaskExamDetailsModalComponent } from '@views/main/views/tasks/views/task-exam/components/task-exam-details-modal/task-exam-details-modal.component';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';

import { TaskExamTableConfigService } from './services/task-exam-table-config.service';
import { TaskExamStore } from './task-exam.store';

@Component({
  selector: 'app-task-exam',
  standalone: true,
  imports: [CommonModule, ListComponent, TaskExamDetailsModalComponent, ButtonModule, TranslateModule],
  providers: [TaskExamStore, TaskExamTableConfigService],
  templateUrl: './task-exam.component.html',
  styleUrls: ['./task-exam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskExamComponent implements OnInit {
  public readonly loadingState = LoadingState;
  public columns!: ListColumnsInterface[];
  public listCallState$!: Observable<CallState>;
  public list$!: Observable<ListResponseInterface<ExamResponseInterface> | null>;
  public itemDetails: ExamResponseInterface | null = null;
  public detailsModalIsVisible = false;

  constructor(
    private componentStore: TaskExamStore,
    private tableConfigService: TaskExamTableConfigService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  public goAdd(): void {
    this.router.navigate(['main/creators/exam']).then();
  }

  public handleShowDetails(exam: ExamResponseInterface): void {
    this.itemDetails = exam;
    this.detailsModalIsVisible = true;
  }

  private setUpProperties(): void {
    this.columns = this.tableConfigService.getTableValues();
    this.listCallState$ = this.componentStore.listCallState$;
    this.list$ = this.componentStore.list$;

    this.componentStore.getTaskExamList();
  }
}
