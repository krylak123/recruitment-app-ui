import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserCandidateResponseInterface } from '@backend/users';
import { TranslateModule } from '@ngx-translate/core';
import { DATE_FORMAT_WITH_TIME } from '@shared/constants';
import { UserNamesPipe } from '@shared/pipes';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-candidate-details-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, UserNamesPipe, TranslateModule],
  templateUrl: './candidate-details-modal.component.html',
  styleUrls: ['./candidate-details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateDetailsModalComponent {
  @Input({ required: true }) public item!: UserCandidateResponseInterface;
  @Input({ required: true }) public isVisible = false;
  @Output() public hideModal: EventEmitter<void> = new EventEmitter<void>();
  public readonly dateFormat = DATE_FORMAT_WITH_TIME;
}
