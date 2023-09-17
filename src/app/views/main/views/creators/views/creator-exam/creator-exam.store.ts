import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamsService } from '@backend/exams';
import { ExamPayloadInterface } from '@backend/exams/models/exam-payload.interface';
import { ToastService } from '@core/services';
import { ComponentStore } from '@ngrx/component-store';
import { CallState, LoadingState } from '@shared/store';
import { EMPTY, Observable, catchError, map, switchMap, tap } from 'rxjs';

export interface CreatorExamState {
  addCallState: CallState;
}

@Injectable()
export class CreatorExamStore extends ComponentStore<CreatorExamState> {
  public readonly addCallState$: Observable<CallState> = this.select(state => state.addCallState);
  constructor(
    private examsService: ExamsService,
    private toastService: ToastService
  ) {
    super({ addCallState: LoadingState.INIT });
  }

  public readonly clearState = this.updater(
    (state): CreatorExamState => ({ ...state, addCallState: LoadingState.INIT })
  );

  public readonly addExam = this.effect((payload$: Observable<ExamPayloadInterface>) => {
    return payload$.pipe(
      tap(() => this.patchState((): CreatorExamState => ({ addCallState: LoadingState.LOADING }))),
      switchMap(payload =>
        this.examsService.createExam(payload).pipe(
          map(() => {
            this.patchState((): CreatorExamState => ({ addCallState: LoadingState.LOADED }));

            this.toastService.triggerSuccessToast('EXAM.STORE.EXAM_SUMMARY', 'EXAM.STORE.SUCCESS_MES.ADD');
          }),
          catchError((error: HttpErrorResponse) => {
            this.patchState((): CreatorExamState => ({ addCallState: { error } }));

            this.toastService.triggerErrorToast('EXAM.STORE.EXAM_SUMMARY', 'EXAM.STORE.ERROR_MES.ADD');

            return EMPTY;
          })
        )
      )
    );
  });
}
