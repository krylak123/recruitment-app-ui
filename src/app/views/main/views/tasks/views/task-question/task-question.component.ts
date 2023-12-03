import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuestionCloseResponseInterface, QuestionOpenResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState } from '@shared/store';
import { TabViewModule } from 'primeng/tabview';
import { Observable } from 'rxjs';

import { TaskQuestionCloseTableComponent } from './components/task-question-close-table/task-question-close-table.component';
import { TaskQuestionOpenTableComponent } from './components/task-question-open-table/task-question-open-table.component';
import { TaskQuestionStore } from './task-question.store';

@Component({
  selector: 'app-task-question',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    TranslateModule,
    TaskQuestionCloseTableComponent,
    TaskQuestionOpenTableComponent,
  ],
  providers: [TaskQuestionStore],
  templateUrl: './task-question.component.html',
  styleUrls: ['./task-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskQuestionComponent implements OnInit {
  public listCloseCallState$!: Observable<CallState>;
  public listClose$!: Observable<ListResponseInterface<QuestionCloseResponseInterface> | null>;
  public listOpenCallState$!: Observable<CallState>;
  public listOpen$!: Observable<ListResponseInterface<QuestionOpenResponseInterface> | null>;

  constructor(private componentStore: TaskQuestionStore) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  private setUpProperties(): void {
    this.listCloseCallState$ = this.componentStore.listCloseCallState$;
    this.listClose$ = this.componentStore.listClose$;
    this.listOpenCallState$ = this.componentStore.listOpenCallState$;
    this.listOpen$ = this.componentStore.listOpen$;

    this.componentStore.getTaskQuestionCloseList();
    this.componentStore.getTaskQuestionOpenList();
  }
}
