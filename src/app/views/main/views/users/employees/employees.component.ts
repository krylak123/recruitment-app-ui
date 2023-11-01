import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UserResponseInterface } from '@backend/users';
import { TranslateModule } from '@ngx-translate/core';
import { ListColumnsInterface, ListComponent } from '@shared/components/list';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { EmployeeCreateModalComponent } from '@views/main/views/users/employees/components/employee-create-modal/employee-create-modal.component';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';

import { EmployeeDetailsModalComponent } from './components/employee-details-modal/employee-details-modal.component';
import { EmployeesStore } from './employees.store';
import { EmployeesTableConfigService } from './services/employees-table-config.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    EmployeeDetailsModalComponent,
    ButtonModule,
    TranslateModule,
    EmployeeCreateModalComponent,
  ],
  providers: [EmployeesStore, EmployeesTableConfigService],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent implements OnInit, OnDestroy {
  public readonly loadingState = LoadingState;
  public columns!: ListColumnsInterface[];
  public listCallState$!: Observable<CallState>;
  public list$!: Observable<ListResponseInterface<UserResponseInterface> | null>;
  public itemDetails: UserResponseInterface | null = null;
  public formModalIsVisible = false;
  public detailsModalIsVisible = false;

  constructor(
    private employeesStore: EmployeesStore,
    private tableConfigService: EmployeesTableConfigService
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  public ngOnDestroy(): void {
    this.employeesStore.clearState();
  }

  public handleShowDetails(user: UserResponseInterface): void {
    this.itemDetails = user;
    this.detailsModalIsVisible = true;
  }

  public handleLoadList(): void {
    this.employeesStore.getEmployeesList();
  }

  private setUpProperties(): void {
    this.columns = this.tableConfigService.getTableValues();
    this.listCallState$ = this.employeesStore.listCallState$;
    this.list$ = this.employeesStore.list$;

    this.handleLoadList();
  }
}
