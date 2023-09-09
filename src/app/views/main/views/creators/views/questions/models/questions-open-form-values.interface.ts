import { ExpLevelEnum } from '@shared/enums';

export interface QuestionsOpenFormValuesInterface {
  name: string;
  content: string;
  expLevel: ExpLevelEnum;
  timeLimit: number;
  maxPoints: number;
}
