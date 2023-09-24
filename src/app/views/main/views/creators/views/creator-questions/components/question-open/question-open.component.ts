import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionOpenPayload } from '@backend/questions';
import { ToastService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';
import { EXAM_DESCRIPTION_MAX_LENGTH, NAME_MAX_LENGTH } from '@shared/constants';
import { ExpLevelEnum } from '@shared/enums';
import { FormInputTextComponent, FormInputTextareaComponent } from '@shared/form-controls';
import { CallState, LoadingState } from '@shared/store';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { Observable, filter, tap } from 'rxjs';

import { CreatorQuestionsFormAdapterService } from '../../adapters/creator-questions-form-adapter.service';
import { CreatorQuestionsOpenFormInterface } from '../../models/creator-questions-open-form.interface';
import { QuestionOpenStore } from './question-open.store';

@Component({
  selector: 'app-question-open',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule,
    TranslateModule,
    RadioButtonModule,
    InputTextareaModule,
    ButtonModule,
    SliderModule,
    FormsModule,
    FormInputTextComponent,
    FormInputTextareaComponent,
  ],
  providers: [QuestionOpenStore],
  templateUrl: './question-open.component.html',
  styleUrls: ['./question-open.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionOpenComponent implements OnInit {
  public readonly loadingState = LoadingState;
  public readonly expLevelList: string[] = Object.keys(ExpLevelEnum);
  public readonly nameMaxLength = NAME_MAX_LENGTH;
  public readonly descriptionMaxLength = EXAM_DESCRIPTION_MAX_LENGTH;
  public form!: FormGroup<CreatorQuestionsOpenFormInterface>;
  public addCallState$!: Observable<CallState>;

  constructor(
    private formAdapter: CreatorQuestionsFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private questionOpenStore: QuestionOpenStore,
    private destroyRef: DestroyRef,
    private toastService: ToastService
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
    this.setUpDataFlow();
  }

  public goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.aRoute });
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return this.toastService.triggerWarnToast('FORM.FILL_FIELD');
    }

    const payload: QuestionOpenPayload = this.form.getRawValue();

    this.questionOpenStore.addQuestionClose(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createOpenQuestionForm();

    this.addCallState$ = this.questionOpenStore.addCallState$;
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
    this.questionOpenStore.clearState();
    this.form.reset();
  }
}
