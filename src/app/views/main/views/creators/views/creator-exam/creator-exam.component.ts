import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';
import { ExpLevelEnum } from '@shared/enums';
import { LoadingState } from '@shared/store';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';

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

  constructor(
    private formAdapter: CreatorExamFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private toastService: ToastService
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  public goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.aRoute });
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
  }
}
