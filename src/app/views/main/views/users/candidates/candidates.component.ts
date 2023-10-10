import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UserResponseInterface } from '@backend/users';
import { TranslateModule } from '@ngx-translate/core';
import { ListComponent } from '@shared/components';
import { ListColumnsInterface } from '@shared/components/list';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { CandidateDetailsModalComponent } from '@views/main/views/users/candidates/components/candidate-details-modal/candidate-details-modal.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';

import { CandidatesStore } from './candidates.store';
import { CandidatesTableConfigService } from './services/candidates-table-config.service';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    RippleModule,
    ListComponent,
    DialogModule,
    CandidateDetailsModalComponent,
  ],
  providers: [CandidatesStore, CandidatesTableConfigService],
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatesComponent implements OnInit, OnDestroy {
  public readonly loadingState = LoadingState;
  public columns!: ListColumnsInterface[];
  public listCallState$!: Observable<CallState>;
  public list$!: Observable<ListResponseInterface<UserResponseInterface> | null>;
  public itemDetails: UserResponseInterface | null = null;
  public detailsModalIsVisible = false;
  constructor(
    private candidatesStore: CandidatesStore,
    private tableConfigService: CandidatesTableConfigService
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  public ngOnDestroy(): void {
    this.candidatesStore.clearState();
  }

  public handleShowDetails(user: UserResponseInterface): void {
    this.itemDetails = user;
    this.detailsModalIsVisible = true;
  }

  private setUpProperties(): void {
    this.columns = this.tableConfigService.getTableValues();
    this.listCallState$ = this.candidatesStore.listCallState$;
    this.list$ = this.candidatesStore.list$;

    this.candidatesStore.getCandidatesList();
  }
}
