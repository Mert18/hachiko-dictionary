import { Schema, model } from "mongoose";
import { IWord } from "../../types/index";

const WordSchema = new Schema<IWord>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: [String],
    required: true,
    trim: true,
  },
  kind: {
    type: String,
    required: true,
    trim: true,
  },
  synonyms: {
    type: [String],
    required: false,
    trim: true,
  },
  antonyms: {
    type: [String],
    required: false,
    trim: true,
  },
  sentences: {
    type: [String],
    required: true,
    trim: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
  toremember: {
    type: String,
    required: false,
  },
});

const Word = model<IWord>("Word", WordSchema);

export default Word;
