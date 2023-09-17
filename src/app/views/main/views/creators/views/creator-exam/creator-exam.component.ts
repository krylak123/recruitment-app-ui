import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@core/services';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { searchQuestionOpenActions, selectSearchQuestionOpenResultList } from '@shared/data-access';
import { ExpLevelEnum } from '@shared/enums';
import { LoadingState } from '@shared/store';
import { Message } from 'primeng/api';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { Observable } from 'rxjs';

import { CreatorExamFormAdapterService } from './adapters/creator-exam-form-adapter.service';
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
  ],
  providers: [CreatorExamFormAdapterService],
  templateUrl: './creator-exam.component.html',
  styleUrls: ['./creator-exam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorExamComponent implements OnInit {
  public readonly loadingState = LoadingState;
  public readonly expLevelList: string[] = Object.keys(ExpLevelEnum);
  public form!: FormGroup<CreatorExamFormInterface>;
  public formSearchQuestionClose!: FormControl<string>;
  public formSearchQuestionOpen!: FormControl<string>;
  public selectedQuestionClose!: any[];
  public selectedQuestionOpen!: any[];
  public messageNoSelectedQuestionOpen!: Message[];
  public messageNoSelectedQuestionClose!: Message[];
  public questionOpenList$!: Observable<any[]>;

  constructor(
    private formAdapter: CreatorExamFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private toastService: ToastService,
    private store: Store,
    private translateService: TranslateService
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  public goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.aRoute });
  }

  public handleSearchQuestionClose(event: AutoCompleteCompleteEvent): void {
    const phrase: string = event.query;

    console.log(phrase);
    // this.store.dispatch(searchQuestionCloseActions.searchQuestionClose({ phrase }));
  }

  public handleSearchQuestionOpen(event: AutoCompleteCompleteEvent): void {
    const phrase: string = event.query;

    this.store.dispatch(searchQuestionOpenActions.searchQuestionOpen({ phrase }));
  }

  public handleSelectQuestionClose(questionClose: any): void {
    this.selectedQuestionClose = [...this.selectedQuestionClose, questionClose];

    this.formSearchQuestionClose.reset();
  }

  public handleSelectQuestionOpen(questionOpen: any): void {
    this.selectedQuestionOpen = [...this.selectedQuestionOpen, questionOpen];

    this.formSearchQuestionOpen.reset();
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return this.toastService.triggerWarnToast('FORM.FILL_FIELD');
    }

    console.log(this.form.value);
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

    this.questionOpenList$ = this.store.select(selectSearchQuestionOpenResultList);
  }
}
