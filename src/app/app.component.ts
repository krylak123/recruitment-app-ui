import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public constructor(private primengConfig: PrimeNGConfig) {}

  public ngOnInit(): void {
    this.setUpPrimeNGConfig();
  }

  private setUpPrimeNGConfig(): void {
    this.primengConfig.ripple = true;
  }
}
