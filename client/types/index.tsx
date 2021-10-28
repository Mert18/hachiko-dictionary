export interface IWord {
  _id: string;
  title: string;
  description: string[];
  kind: string;
  synonyms: string[];
  antonyms: string[];
  sentences: string[];
  created_at: Date;
  updated_at: Date;
  toremember?: string;
}

export interface IGame {
  id: number;
  title: string;
  description: string;
  route: string;
}

export interface IAnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

export interface IQuestion {
  question: any;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: IAnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
  incorrectAnswers: any;
}
