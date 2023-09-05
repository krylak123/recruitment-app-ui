import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-creators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorsComponent {}
