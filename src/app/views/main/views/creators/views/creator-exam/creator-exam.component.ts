import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creator-exam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creator-exam.component.html',
  styleUrls: ['./creator-exam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorExamComponent {}
