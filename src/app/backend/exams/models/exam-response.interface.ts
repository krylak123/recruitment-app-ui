import { QuestionCloseResponseInterface, QuestionOpenResponseInterface } from '@backend/questions';
import { ExpLevelEnum } from '@shared/enums';

export interface ExamResponseInterface {
  id: string;
  name: string;
  description: string;
  expLevel: ExpLevelEnum;
  createAt: Date;
  timeLimitSummary: number;
  questionQuantity: number;
  questionOpenList: QuestionOpenResponseInterface[];
  questionCloseList: QuestionCloseResponseInterface[];
}
