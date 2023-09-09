import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionClosePayload } from '@backend/questions';
import { ToastService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';
import { ExpLevelEnum } from '@shared/enums';
import { CallState, LoadingState } from '@shared/store';
import { QuestionsFormAdapterService } from '@views/main/views/creators/views/questions/adapters/questions-form-adapter.service';
import { QuestionCloseStore } from '@views/main/views/creators/views/questions/components/question-close/question-close.store';
import { QuestionsCloseFormInterface } from '@views/main/views/creators/views/questions/models/questions-close-form.interface';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { Observable, filter, tap } from 'rxjs';

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
  ],
  providers: [QuestionCloseStore],
  templateUrl: './question-close.component.html',
  styleUrls: ['./question-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCloseComponent implements OnInit {
  public readonly loadingState = LoadingState;
  public readonly expLevelList: string[] = Object.keys(ExpLevelEnum);
  public form!: FormGroup<QuestionsCloseFormInterface>;
  public addCallState$!: Observable<CallState>;

  constructor(
    private formAdapter: QuestionsFormAdapterService,
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
