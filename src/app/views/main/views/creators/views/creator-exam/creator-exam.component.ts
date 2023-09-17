import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamPayloadInterface } from '@backend/exams/models/exam-payload.interface';
import { QuestionCloseResponseInterface, QuestionOpenResponseInterface } from '@backend/questions';
import { ToastService } from '@core/services';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { QuestionDetailItemComponent } from '@shared/components';
import { searchQuestionOpenActions, selectSearchQuestionOpenResultList } from '@shared/data-access';
import {
  searchQuestionCloseActions,
  selectSearchQuestionCloseResultList,
} from '@shared/data-access/search-question-close';
import { ExpLevelEnum } from '@shared/enums';
import { expLevelColorMap } from '@shared/maps/exp-level-color.map';
import { CallState, LoadingState } from '@shared/store';
import { Message } from 'primeng/api';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { Observable, filter, tap } from 'rxjs';

import { CreatorExamFormAdapterService } from './adapters/creator-exam-form-adapter.service';
import { CreatorExamStore } from './creator-exam.store';
import { CreatorExamFormValuesInterface } from './models/creator-exam-form-values.interface';
import { CreatorExamFormInterface } from './models/creator-exam-form.interface';

@Component({
  selector: 'app-creator-exam',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    TranslateModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    SliderModule,
    DividerModule,
    AutoCompleteModule,
    MessagesModule,
    QuestionDetailItemComponent,
  ],
  providers: [CreatorExamFormAdapterService, CreatorExamStore],
  templateUrl: './creator-exam.component.html',
  styleUrls: ['./creator-exam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorExamComponent implements OnInit {
  public readonly loadingState = LoadingState;
  public readonly expLevelList = Object.keys(ExpLevelEnum);
  public readonly expLevelColor = expLevelColorMap;
  public form!: FormGroup<CreatorExamFormInterface>;
  public formSearchQuestionClose!: FormControl<string>;
  public formSearchQuestionOpen!: FormControl<string>;
  public selectedQuestionClose!: QuestionCloseResponseInterface[];
  public selectedQuestionOpen!: QuestionOpenResponseInterface[];
  public messageNoSelectedQuestionOpen!: Message[];
  public messageNoSelectedQuestionClose!: Message[];
  public questionCloseList$!: Observable<QuestionCloseResponseInterface[]>;
  public questionOpenList$!: Observable<QuestionOpenResponseInterface[]>;
  public addCallState$!: Observable<CallState>;

  constructor(
    private formAdapter: CreatorExamFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private toastService: ToastService,
    private store: Store,
    private translateService: TranslateService,
    private creatorExamStore: CreatorExamStore
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
    this.setUpDataFlow();
  }

  public goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.aRoute });
  }

  public handleSearchQuestionClose(event: AutoCompleteCompleteEvent): void {
    const phrase: string = event.query;

    this.store.dispatch(searchQuestionCloseActions.searchQuestionClose({ phrase }));
  }

  public handleSearchQuestionOpen(event: AutoCompleteCompleteEvent): void {
    const phrase: string = event.query;

    this.store.dispatch(searchQuestionOpenActions.searchQuestionOpen({ phrase }));
  }

  public handleSelectQuestionClose(questionClose: QuestionCloseResponseInterface): void {
    if (this.selectedQuestionClose.find(item => item.id === questionClose.id)) {
      return this.toastService.triggerInfoToast('EXAM.ALREADY_ADDED_QUESTION');
    }

    this.selectedQuestionClose = [...this.selectedQuestionClose, questionClose];

    this.formSearchQuestionClose.reset();
  }

  public handleSelectQuestionOpen(questionOpen: QuestionOpenResponseInterface): void {
    if (this.selectedQuestionOpen.find(item => item.id === questionOpen.id)) {
      return this.toastService.triggerInfoToast('EXAM.ALREADY_ADDED_QUESTION');
    }

    this.selectedQuestionOpen = [...this.selectedQuestionOpen, questionOpen];

    this.formSearchQuestionOpen.reset();
  }

  public handleRemoveQuestionClose(id: string): void {
    this.selectedQuestionClose = this.selectedQuestionClose.filter(item => item.id !== id);
  }

  public handleRemoveQuestionOpen(id: string): void {
    this.selectedQuestionOpen = this.selectedQuestionOpen.filter(item => item.id !== id);
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return this.toastService.triggerWarnToast('FORM.FILL_FIELD');
    } else if (!(this.selectedQuestionClose.length + this.selectedQuestionOpen.length)) {
      return this.toastService.triggerWarnToast('EXAM.ACCEPT_MIN');
    }

    const payload: ExamPayloadInterface = this.formatPayload(this.form.getRawValue());

    this.creatorExamStore.addExam(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();
    this.formSearchQuestionClose = this.formAdapter.createSearchQuestionCloseFormControl();
    this.formSearchQuestionOpen = this.formAdapter.createSearchQuestionOpenFormControl();
    this.selectedQuestionClose = [];
    this.selectedQuestionOpen = [];
    this.messageNoSelectedQuestionOpen = [
      {
        severity: 'warn',
        detail: this.translateService.instant('QUESTIONS.MESSAGE.OPEN_QUESTION_NOT_SELECTED'),
      },
    ];
    this.messageNoSelectedQuestionClose = [
      {
        severity: 'warn',
        detail: this.translateService.instant('QUESTIONS.MESSAGE.CLOSE_QUESTION_NOT_SELECTED'),
      },
    ];

    this.questionCloseList$ = this.store.select(selectSearchQuestionCloseResultList);
    this.questionOpenList$ = this.store.select(selectSearchQuestionOpenResultList);
    this.addCallState$ = this.creatorExamStore.addCallState$;
  }

  private setUpDataFlow(): void {
    this.handleAddCallState();
  }

  private handleAddCallState(): void {
    this.addCallState$
      .pipe(
        filter(status => status === LoadingState.LOADED),
        tap(() => this.resetForm()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private formatPayload(formValues: CreatorExamFormValuesInterface): ExamPayloadInterface {
    return {
      ...formValues,
      questionCloseList: this.selectedQuestionClose.map(item => item.id),
      questionOpenList: this.selectedQuestionOpen.map(item => item.id),
    };
  }

  private resetForm(): void {
    this.creatorExamStore.clearState();
    this.form.reset();
    this.selectedQuestionClose = [];
    this.selectedQuestionOpen = [];
  }
}
