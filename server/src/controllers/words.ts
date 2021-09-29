import { RequestHandler } from "express";
import Word from "../db/models/word";
import { IWord } from "../types";

export const createWord: RequestHandler = async (req, res) => {
  try {
    const word = new Word(req.body);
    await word.save();
    res.status(201).send({ message: "Created Word", createdWord: word });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getWords: RequestHandler = async (_, res) => {
  try {
    const words = await Word.find({});
    res.json(words);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
};

export const getWord: RequestHandler = async (req, res) => {
  try {
    let id = req.params.id;
    const word = await Word.find({ title: id });
    res.json(word);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
};

export const deleteWord: RequestHandler = async (req, res) => {
  try {
    await Word.findOneAndDelete({ title: req.body.title as string }).then(
      (result) => {
        res.status(200).send(result);
      }
    );
  } catch (error: any) {
    res.status(404).send({ message: "Cannot delete word" });
  }
};

export const updateWord: RequestHandler = async (req, res) => {
  try {
    await Word.findOneAndUpdate(
      { title: req.body.title },
      {
        $set: {
          description: req.body.newDescription as String,
        },
      }
    ).then((result) => {
      console.log(result);
      res.status(201).send({ message: "Successfully updated!" });
    });
  } catch (error: any) {
    res.status(404).send({ message: "Cannot find word!" });
  }
};
