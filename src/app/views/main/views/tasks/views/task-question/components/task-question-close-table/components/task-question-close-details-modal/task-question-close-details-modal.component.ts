import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionCloseResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionDetailItemComponent } from '@shared/components';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-task-question-close-details-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, QuestionDetailItemComponent, TranslateModule],
  templateUrl: './task-question-close-details-modal.component.html',
  styleUrls: ['./task-question-close-details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskQuestionCloseDetailsModalComponent {
  @Input({ required: true }) public item!: QuestionCloseResponseInterface;
  @Input({ required: true }) public isVisible = false;
  @Output() public hideModal: EventEmitter<void> = new EventEmitter<void>();
}
