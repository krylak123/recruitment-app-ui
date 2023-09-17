import { ExpLevelEnum } from '@shared/enums';

export interface ExamPayloadInterface {
  name: string;
  description: string;
  expLevel: ExpLevelEnum;
  questionCloseList: string[];
  questionOpenList: string[];
}
