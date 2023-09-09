import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private messageService: MessageService,
    private translateService: TranslateService
  ) {}

  public triggerSuccessToast(summary: string, detail: string): void {
    this.messageService.add({
      severity: 'success',
      summary: this.translateService.instant(summary),
      detail: this.translateService.instant(detail),
    });
  }

  public triggerInfoToast(summary: string, detail: string): void {
    this.messageService.add({
      severity: 'info',
      summary: this.translateService.instant(summary),
      detail: this.translateService.instant(detail),
    });
  }

  public triggerWarnToast(summary: string, detail?: string): void {
    this.messageService.add({
      severity: 'warn',
      summary: this.translateService.instant(summary),
      detail: detail && this.translateService.instant(detail),
    });
  }

  public triggerErrorToast(summary: string, detail: string): void {
    this.messageService.add({
      severity: 'error',
      summary: this.translateService.instant(summary),
      detail: this.translateService.instant(detail),
    });
  }
}
