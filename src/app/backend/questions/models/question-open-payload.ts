import { ExpLevelEnum } from '@shared/enums';

export interface QuestionOpenPayload {
  name: string;
  content: string;
  expLevel: ExpLevelEnum;
  timeLimit: number;
}
