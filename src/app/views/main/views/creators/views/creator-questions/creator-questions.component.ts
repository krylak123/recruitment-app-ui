import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';

import { CreatorQuestionsFormAdapterService } from './adapters/creator-questions-form-adapter.service';
import { QuestionCloseComponent } from './components/question-close/question-close.component';
import { QuestionOpenComponent } from './components/question-open/question-open.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, TabViewModule, TranslateModule, QuestionOpenComponent, QuestionCloseComponent],
  providers: [CreatorQuestionsFormAdapterService],
  templateUrl: './creator-questions.component.html',
  styleUrls: ['./creator-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorQuestionsComponent {}
