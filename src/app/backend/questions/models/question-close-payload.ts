import { ExpLevelEnum } from '@shared/enums';

export interface QuestionClosePayload {
  name: string;
  content: string;
  expLevel: ExpLevelEnum;
  timeLimit: number;
}
