import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ExpLevelEnum } from '@shared/enums';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';

import { QuestionsFormAdapterService } from '../../adapters/questions-form-adapter.service';
import { QuestionsOpenFormInterface } from '../../models/questions-open-form.interface';

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
  ],
  templateUrl: './question-open.component.html',
  styleUrls: ['./question-open.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionOpenComponent implements OnInit {
  public readonly expLevelList: string[] = Object.keys(ExpLevelEnum);
  public form!: FormGroup<QuestionsOpenFormInterface>;
  constructor(
    private formAdapter: QuestionsFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();

    this.form.valueChanges.subscribe(console.log);
  }

  public goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.aRoute });
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    console.log(this.form.value);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createOpenQuestionForm();
  }
}
