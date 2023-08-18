import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_NAME } from '@shared/constants/app-name.constants';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public readonly appName: string = APP_NAME;
}
