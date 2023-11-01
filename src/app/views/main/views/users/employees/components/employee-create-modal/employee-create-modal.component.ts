import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterPayloadInterface } from '@backend/auth/models';
import { ToastService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';
import { FormInputTextComponent } from '@shared/form-controls';
import { CallState, LoadingState } from '@shared/store';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Observable, filter, tap } from 'rxjs';

import { EmployeeFormAdapterService, EmployeeFormInterface } from './adapters/employee-form-adapter.service';
import { EmployeeCreateModalStore } from './employee-create-modal.store';

@Component({
  selector: 'app-employee-create-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, TranslateModule, ButtonModule, ReactiveFormsModule, FormInputTextComponent],
  providers: [EmployeeFormAdapterService, EmployeeCreateModalStore],
  templateUrl: './employee-create-modal.component.html',
  styleUrls: ['./employee-create-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCreateModalComponent implements OnInit {
  @Input({ required: true }) public isVisible = false;
  @Output() public hideModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() public reloadList: EventEmitter<void> = new EventEmitter<void>();
  public readonly loadingState = LoadingState;
  public form!: FormGroup<EmployeeFormInterface>;
  public createCallState$!: Observable<CallState>;

  constructor(
    private formAdapter: EmployeeFormAdapterService,
    private toastService: ToastService,
    private employeeCreateModalStore: EmployeeCreateModalStore,
    private destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
    this.setUpDataFlow();
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return this.toastService.triggerWarnToast('FORM.FILL_FIELD');
    }

    const payload: RegisterPayloadInterface = {
      commonGroup: {
        ...this.form.getRawValue(),
      },
    };

    console.log(payload);
    this.employeeCreateModalStore.createEmployee(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();
    this.createCallState$ = this.employeeCreateModalStore.createCallState$;
  }

  private setUpDataFlow(): void {
    this.handleAddCallState();
  }

  private handleAddCallState(): void {
    this.createCallState$
      .pipe(
        filter(status => status === LoadingState.LOADED),
        tap(() => {
          this.reloadList.emit();
          this.resetForm();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private resetForm(): void {
    this.employeeCreateModalStore.clearState();
    this.form.reset();
  }
}
