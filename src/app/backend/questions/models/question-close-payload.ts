import { ExpLevelEnum } from '@shared/enums';

export interface QuestionClosePayload {
  name: string;
  content: string;
  expLevel: ExpLevelEnum;
  timeLimit: number;
  answers: QuestionClosePayloadAnswer[];
}

export interface QuestionClosePayloadAnswer {
  content: string;
  isCorrect: boolean;
}
