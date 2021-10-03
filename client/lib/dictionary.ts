import getConfig from "next/config";
import { IWord } from "../types";

const { publicRuntimeConfig } = getConfig();

const allwords_uri = publicRuntimeConfig.GET_WORDS;
const singleword_uri = publicRuntimeConfig.GET_WORD;
const createword_uri = publicRuntimeConfig.CREATE_WORD;

export const getAllWords = async () => {
  const response = await fetch(`${allwords_uri}`);
  const words = response.json();
  return words;
};

export const getSingleWord = async (word: IWord) => {
  const response = await fetch(`${singleword_uri}/${word}`);
  const myword = response.json();
  return myword;
};

export const createWord = async (word: any) => {
  await fetch(createword_uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(word),
  });
};
