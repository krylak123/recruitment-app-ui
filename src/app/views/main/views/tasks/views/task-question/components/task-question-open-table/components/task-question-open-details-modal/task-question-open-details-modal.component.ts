import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionOpenResponseInterface } from '@backend/questions';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-task-question-open-details-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, TranslateModule],
  templateUrl: './task-question-open-details-modal.component.html',
  styleUrls: ['./task-question-open-details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskQuestionOpenDetailsModalComponent {
  @Input({ required: true }) public item!: QuestionOpenResponseInterface;
  @Input({ required: true }) public isVisible = false;
  @Output() public hideModal: EventEmitter<void> = new EventEmitter<void>();
}
