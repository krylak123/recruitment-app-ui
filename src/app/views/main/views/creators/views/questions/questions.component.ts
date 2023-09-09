import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionOpenComponent } from '@views/main/views/creators/views/questions/components/question-open/question-open.component';
import { TabViewModule } from 'primeng/tabview';

import { QuestionsFormAdapterService } from './adapters/questions-form-adapter.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, TabViewModule, TranslateModule, QuestionOpenComponent],
  providers: [QuestionsFormAdapterService],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {}
