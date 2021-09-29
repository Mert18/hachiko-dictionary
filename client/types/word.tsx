
export interface IWord {
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
