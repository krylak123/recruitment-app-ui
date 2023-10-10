import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ListValueFormatPipe } from '@shared/components/list/pipes/list-value-format.pipe';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

import { ListColumnsInterface } from './models/list-columns.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    TableModule,
    TranslateModule,
    SkeletonModule,
    ListValueFormatPipe,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> {
  @Input({ required: true }) public columns!: ListColumnsInterface[];
  @Input({ required: true }) public list!: ListResponseInterface<T> | null;
  @Input({ required: true }) public listCallState!: CallState | null;
  @Input() public handleRowSelect = false;
  @Input() public heading?: string;
  @Output() public rowSelect: EventEmitter<T> = new EventEmitter<T>();
  public readonly loadingState = LoadingState;
}
