import { Router } from "express";

import {
  createWord,
  deleteWord,
  getWords,
  getWord,
  updateWord,
} from "../controllers/words";

const router = Router();

router.get("/getwords", getWords);
router.get("/getword/:id", getWord);
router.post("/createword", createWord);
router.put("/updateword", updateWord);
router.delete("/deleteword", deleteWord);

export default router;
