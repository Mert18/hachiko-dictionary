import { Router } from "express";

import {
  createWord,
  deleteWord,
  getWords,
  updateWord,
} from "../controllers/words";

const router = Router();

router.get("/getwords", getWords);
router.post("/createWord", createWord);
router.put("/updateWord", updateWord);
router.delete("/deleteWord", deleteWord);

export default router;
