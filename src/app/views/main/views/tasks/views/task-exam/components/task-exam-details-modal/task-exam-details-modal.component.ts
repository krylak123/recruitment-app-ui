import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ExamResponseInterface } from '@backend/exams';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionDetailItemComponent } from '@shared/components';
import { DATE_FORMAT_WITH_TIME } from '@shared/constants';
import { expLevelColorMap } from '@shared/maps/exp-level-color.map';
import { UserNamesPipe } from '@shared/pipes';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-task-exam-details-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, TranslateModule, UserNamesPipe, MessagesModule, QuestionDetailItemComponent],
  templateUrl: './task-exam-details-modal.component.html',
  styleUrls: ['./task-exam-details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskExamDetailsModalComponent {
  @Input({ required: true }) public item!: ExamResponseInterface;
  @Input({ required: true }) public isVisible = false;
  @Output() public hideModal: EventEmitter<void> = new EventEmitter<void>();
  public readonly dateFormat = DATE_FORMAT_WITH_TIME;
  protected readonly expLevelColorMap = expLevelColorMap;
  public readonly expLevelColor = expLevelColorMap;
}
