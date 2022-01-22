import { Router } from "express";

import {
  createWord,
  deleteWord,
  getWords,
  getWord,
  getWordRandom,
  updateWord,
} from "../controllers/words";

const router = Router();

router.get("/getwords", getWords);
router.get("/getword/random", getWordRandom);
router.get("/getword/:id", getWord);
router.post("/createword", createWord);
router.put("/updateword", updateWord);
router.delete("/deleteword", deleteWord);

export default router;
