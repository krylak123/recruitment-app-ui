import { ExpLevelEnum } from '@shared/enums';

export interface QuestionCloseResponseInterface {
  id: string;
  name: string;
  content: string;
  expLevel: ExpLevelEnum;
  timeLimit: number;
  answers: QuestionCloseResponseInterfaceAnswer[];
}

export interface QuestionCloseResponseInterfaceAnswer {
  content: string;
  isCorrect: boolean;
}
