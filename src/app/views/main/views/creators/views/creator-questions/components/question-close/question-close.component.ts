import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionClosePayload } from '@backend/questions';
import { ToastService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';
import { EXAM_DESCRIPTION_MAX_LENGTH, NAME_MAX_LENGTH } from '@shared/constants';
import { ExpLevelEnum } from '@shared/enums';
import { FormInputTextComponent, FormInputTextareaComponent } from '@shared/form-controls';
import { CallState, LoadingState } from '@shared/store';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { Observable, filter, tap } from 'rxjs';

import { CreatorQuestionsFormAdapterService } from '../../adapters/creator-questions-form-adapter.service';
import { CreatorQuestionsCloseFormInterface } from '../../models/creator-questions-close-form.interface';
import { QuestionCloseStore } from './question-close.store';

@Component({
  selector: 'app-question-close',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TranslateModule,
    SliderModule,
    CheckboxModule,
    FormInputTextComponent,
    FormInputTextareaComponent,
  ],
  providers: [QuestionCloseStore],
  templateUrl: './question-close.component.html',
  styleUrls: ['./question-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCloseComponent implements OnInit {
  public readonly loadingState = LoadingState;
  public readonly expLevelList: string[] = Object.keys(ExpLevelEnum);
  public readonly nameMaxLength = NAME_MAX_LENGTH;
  public readonly descriptionMaxLength = EXAM_DESCRIPTION_MAX_LENGTH;
  public form!: FormGroup<CreatorQuestionsCloseFormInterface>;
  public addCallState$!: Observable<CallState>;

  constructor(
    private formAdapter: CreatorQuestionsFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private questionCloseStore: QuestionCloseStore,
    private destroyRef: DestroyRef,
    private toastService: ToastService
  ) {}

  public get preventRemoveAnswer(): boolean {
    return this.form.controls.answers.length <= 2;
  }

  public get preventAddAnswer(): boolean {
    return this.form.controls.answers.length >= 10;
  }

  public ngOnInit(): void {
    this.setUpProperties();
    this.setUpDataFlow();
  }

  public goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.aRoute });
  }

  public handleAddAnswer(): void {
    this.form.controls.answers.push(this.formAdapter.createCloseQuestionAnswerForm());
  }

  public handleRemoveAnswer(idx: number): void {
    this.form.controls.answers.removeAt(idx);
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return this.toastService.triggerWarnToast('FORM.FILL_FIELD');
    }

    const payload: QuestionClosePayload = this.form.getRawValue();

    this.questionCloseStore.addQuestionClose(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createCloseQuestionForm();

    this.addCallState$ = this.questionCloseStore.addCallState$;
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

  private resetForm(): void {
    this.questionCloseStore.clearState();
    this.form.reset();
  }
}
