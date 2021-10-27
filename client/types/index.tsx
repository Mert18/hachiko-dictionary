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
