import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonModule],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedComponent {
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  public handleLoginBtnClick(): void {
    this.router.navigate(['../auth'], { relativeTo: this.aRoute });
  }
}
