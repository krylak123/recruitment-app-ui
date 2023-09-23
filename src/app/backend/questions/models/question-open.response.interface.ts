import { ExpLevelEnum } from '@shared/enums';

export interface QuestionOpenResponseInterface {
  id: string;
  name: string;
  content: string;
  expLevel: ExpLevelEnum;
  timeLimit: number;
}
