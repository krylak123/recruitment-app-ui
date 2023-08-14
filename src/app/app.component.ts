import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '@envs/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService
  ) {
    console.log(environment.PRODUCTION);
  }

  public ngOnInit(): void {
    this.translateService.setDefaultLang('pl');
    this.translateService.use('pl');

    this.setUpPrimeNGConfig();
  }

  private setUpPrimeNGConfig(): void {
    this.primengConfig.ripple = true;
  }
}
