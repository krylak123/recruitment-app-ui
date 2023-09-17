import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionCloseResponseInterface, QuestionOpenResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

type QuestionDetailItemType = 'CLOSE' | 'OPEN';

@Component({
  selector: 'app-question-detail-item',
  standalone: true,
  imports: [CommonModule, ButtonModule, TranslateModule, DividerModule],
  templateUrl: './question-detail-item.component.html',
  styleUrls: ['./question-detail-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionDetailItemComponent {
  @Input({ required: true }) public type!: QuestionDetailItemType;
  @Input({ required: true }) public data!: QuestionOpenResponseInterface | QuestionCloseResponseInterface;
  @Output() public remove: EventEmitter<string> = new EventEmitter<string>();
}
