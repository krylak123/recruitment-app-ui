import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonModule],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
})
export class UnauthorizedComponent {
  public constructor(
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  public handleLoginBtnClick(): void {
    this.router.navigate(['../auth'], { relativeTo: this.aRoute });
  }
}
